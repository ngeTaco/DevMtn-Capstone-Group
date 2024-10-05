export default function LogoutButton({ onLogout }) {

    return (
        <form onSubmit={onLogout}>
            <button
                type="submit"
                class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-slate-700 hover:bg-white mt-4 lg:mt-0"
            >
                Logout
            </button>
        </form>
    )
}