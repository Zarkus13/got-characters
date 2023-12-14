import OpenAI from 'openai';
import { useQuery } from '@tanstack/react-query';
import { MutableRefObject } from 'react';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const useFetchCharacterBiography = (characterName: string, fetch: boolean) =>
  useQuery({
    queryKey: ['biography', characterName],
    queryFn: () => {
      const bioStored = localStorage.getItem('bio ' + characterName);

      if (bioStored) return Promise.resolve(bioStored);

      return openai.chat.completions
        .create({
          messages: [
            {
              role: 'user',
              content: `Donne-moi la biographie de ${characterName} de la saga A Song of Ice and Fire en anglais d'un maximum de 500 caractères sans préciser qu'il s'agisse d'un personnage de la saga A Song of Ice and Fire.`,
            },
          ],
          model: 'gpt-4-1106-preview',
        })
        .then((res) => {
          const bio = res.choices[0].message.content;

          if (bio) localStorage.setItem('bio ' + characterName, bio);

          return bio;
        });
    },
    staleTime: 60 * 60 * 1000,
    enabled: fetch,
  });

export const useFetchCharacterDescription = (characterName: string, fetch: boolean) =>
  useQuery({
    queryKey: ['description', characterName],
    queryFn: () => {
      const imageUrlStored = localStorage.getItem('pixar ' + characterName);

      if (imageUrlStored) return Promise.resolve(imageUrlStored);

      return openai.chat.completions
        .create({
          messages: [
            {
              role: 'user',
              content: `Si tu devais générer un portrait de ${characterName} de la série Game of Thrones, comment décrirais-tu l'image en anglais ? Détaille le possible et n'écris dans ta réponse que cette description, aucun texte d'introduction, ni de conclusion, et ne précise jamais dans la description qu'il s'agit de ${characterName}.`,
            },
          ],
          model: 'gpt-4-1106-preview',
        })
        .then((res) => res.choices[0].message.content);
    },
    staleTime: 60 * 60 * 1000,
    enabled: fetch,
  });

export const useGenerateCharacterPixarPortrait = (
  characterName: string,
  description: MutableRefObject<string | null>,
  generate: boolean
) =>
  useQuery({
    queryKey: ['portrait', characterName],
    queryFn: () => {
      const imageUrlStored = localStorage.getItem('pixar ' + characterName);

      if (imageUrlStored) return Promise.resolve(imageUrlStored);

      return openai.images
        .generate({
          model: 'dall-e-3',
          prompt: `As a 3D Pixar animated film : ${description.current}`,
        })
        .then((response) => {
          const imageUrl = response.data[0].url;

          if (imageUrl) localStorage.setItem('pixar ' + characterName, imageUrl);

          return imageUrl;
        });
    },
    staleTime: 60 * 60 * 1000,
    enabled: generate,
  });
