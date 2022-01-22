let portalArea: HTMLDivElement | null = document.querySelector("#meow-portal");
if (!portalArea) {
    portalArea = document.createElement("div");
    portalArea.setAttribute("id", "meow-portal");
    document.body.append(portalArea);
}

export default function usePortal() {
    return { portalArea }
}