type Props = {
    children: React.ReactNode
}

export function MainLayout({ children }: Props) {
    return (
        <div className="min-h-screen bg-[#070b14] text-white">
            <div className="grid grid-cols-[#260px_1fr_320px]">
                <aside>Sidebar</aside>

                <main>{children}</main>

                <aside>Right Sidebar</aside>
            </div>
        </div>
    )
}