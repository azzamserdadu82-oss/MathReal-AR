// MathReal-AR Common Scripts

document.addEventListener('DOMContentLoaded', () => {
    console.log('MathReal-AR initialized');
    
    // Modal Logic
    const modal = document.getElementById('pdfModal');
    const closeBtn = document.getElementById('closeModal');
    const pdfIframe = document.getElementById('pdfIframe');

    window.openModal = (pdfUrl) => {
        if (!modal || !pdfIframe) return;
        
        // Reset loading state
        const loader = document.getElementById('modalLoading');
        if (loader) loader.classList.remove('hidden');
        pdfIframe.classList.add('opacity-0');
        pdfIframe.classList.remove('opacity-100');

        pdfIframe.src = pdfUrl;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    };

    window.closeModal = () => {
        if (!modal || !pdfIframe) return;
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        pdfIframe.src = '';
        document.body.style.overflow = 'auto';
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal on click outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
});
