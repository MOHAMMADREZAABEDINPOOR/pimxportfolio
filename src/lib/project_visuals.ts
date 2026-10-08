/** Only files that exist in public/project-previews belong here. */
export const projectScreenshots: Record<string, string> = Object.fromEntries([
  'github-pimx-agent', 'github-pimx-morph', 'pimx-veil', 'pimx-node', 'pimx-moji',
  'github-pimxsats', 'pimx-wide', 'github-pimx-eltex', 'github-pimx-weather',
  'pimx-pass', 'github-pimx-portal', 'github-pimx-fail', 'github-pimx',
  'github-import-export-company', 'soheil-portal', 'github-pimx-swap',
  'github-shop', 'github-shop2', 'github-shop3',
].map(id => [id, `/project-previews/${id}.jpg`]));

export const hasProjectScreenshot = (id: string) => Object.prototype.hasOwnProperty.call(projectScreenshots, id);
