export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  contentFile: string;
  additionalImages: string[];
  links: { title: string; url: string }[];
}