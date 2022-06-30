interface LayoutProps {
    children: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className="flex flex-col h-full w-full bg-zinc-900 text-white justify-center items-center ">
            <h1 className='text-3xl mb-5'>Lista de Despesas</h1>
            <div className="flex h-3/4 w-5/6 bg-zinc-600 text-white justify-around items-center rounded-3xl">
                {props.children}
            </div>
        </div>
    )
}