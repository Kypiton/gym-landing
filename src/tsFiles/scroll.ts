const smoothScroll = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
        });
    }
};

export default smoothScroll;
