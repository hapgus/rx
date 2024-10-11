// ---------------------------------------------------------
// EXTERNAL LINK SUPPORT
// ---------------------------------------------------------
export function ExternalLink({ children, href }) {
    const handleOnClick = (e) => {
        e.preventDefault();
        const width = 600;
        const height = 400;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);

        window.open(href, 'TermsWindow', `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`);
    };

    return <a href={href} onClick={handleOnClick}>{children}</a>;
}

export function EmailLink({ linkText, href }) {
    return <a href={href}>{linkText}</a>;
}
