type Props = {
    text: string;
    onClick: () => void;
}
export function Button({ onClick, text }: Props) {
    return <button
        type="button"
        className="rounded-l-lg border border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        onClick={onClick}
    >
        {text}
    </button>
}