import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { PortfolioItem } from '../types';

interface ProjectDetailsProps {
  items: PortfolioItem[];
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ items }) => {
  const { id } = useParams<{ id: string }>();
  const project = items.find(item => item.id === id);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (project && project.contentFile) {
      fetch(project.contentFile)
        .then(response => response.text())
        .then(text => setContent(text))
        .catch(error => console.error('Error fetching Markdown:', error));
    }
  }, [project]);

  if (!project) {
    return <div>Project not found</div>;
  }

  // Rest of the component remains the same...
};

export default ProjectDetails;