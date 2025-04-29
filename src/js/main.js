document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-modal-target]").forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-modal-target");
            const dialog = document.getElementById(`modal-${targetId}`);
            if (dialog && typeof dialog.showModal === "function") {
                dialog.showModal();
            }
        });
    });
});