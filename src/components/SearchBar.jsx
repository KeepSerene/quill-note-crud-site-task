export default function SearchBar({ onSearch }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search notes..."
        onChange={(event) => onSearch(event.target.value)}
        aria-label="Search notes"
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      />
    </div>
  );
}
