// This creates lazy-loading icon components
const iconModules = import.meta.glob('./assets/*.svg', {
  eager: true
});

// Export the modules directly - they're lazy loaders
export const iconLoaders = iconModules;

// Or create a map with lazy loaders
export const icons: Record<string, any> = {};

// Load a specific icon on demand
export async function getIcon(name: string) {
  if (icons[name]) return icons[name];
  
  const path = `./assets/${name}.svg`;
  const loader = iconModules[path];
  if (!loader) return null;
  
  icons[name] = await loader();
  return icons[name];
}