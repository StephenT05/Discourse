import { getDatabase } from '@/lib/mongodb';
import { getAuth } from '@/lib/auth';

export default async function TagsPage() {
  try {
    const db = await getDatabase();
    const auth = await getAuth();
    
    return (
      <div className="min-h-screen bg-[#F0F0F0] dark:bg-neutral-950 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Tags</h1>
          <div className="bg-white dark:bg-neutral-900 rounded-lg p-6">
            <p className="text-gray-600 dark:text-gray-400">Tag management coming soon...</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading tags:', error);
    return (
      <div className="min-h-screen bg-[#F0F0F0] dark:bg-neutral-950 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-red-600">Error</h1>
          <p className="text-gray-600 dark:text-gray-400">Failed to load tags page</p>
        </div>
      </div>
    );
  }
}
