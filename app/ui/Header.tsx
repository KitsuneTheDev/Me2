export default function Header(): React.ReactNode {
    return(
        <div className="w-full h-fit flex justify-between">
            <div>
                <h1>Kitsu</h1>
            </div>
            <div>
                <button>
                    Power
                </button>
            </div>
        </div>
    );
}