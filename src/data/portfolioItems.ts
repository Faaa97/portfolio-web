import { PortfolioItem } from '../types';

const getProjectFolders = async (): Promise<string[]> => {
  const response = await fetch('/content/projects.json');
  return await response.json();
};

export const getPortfolioItems = async (): Promise<PortfolioItem[]> => {
  const folders = await getProjectFolders();
  const items = await Promise.all(folders.map(async (folder) => {
    const metadataResponse = await fetch(`/content/${folder}/metadata.json`);
    const metadata = await metadataResponse.json();
    return {
      ...metadata,
      contentFile: `/content/${folder}/content.md`,
    };
  }));
  return items;
};