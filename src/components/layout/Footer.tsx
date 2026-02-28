import { MOCK_DATA } from "@/data/mockData";

export function Footer() {
    return (
        <footer className="bg-obsidian border-t border-white/5 py-12 px-6 text-center">
            <p className="text-[10px] uppercase tracking-[0.6em] text-gray-600">
                {MOCK_DATA.footer.copyright}
            </p>
        </footer>
    );
}
