export default function AddPointsButton({ addPoints }) {

    return (
            <button
                type="submit" 
                onClick={addPoints}
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-slate-700 hover:bg-white mt-4 lg:mt-0"
            >
                Add Points
            </button>
    )
}