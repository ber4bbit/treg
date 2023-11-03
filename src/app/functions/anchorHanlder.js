const anchorHandler = () => {
    const anchors = document.querySelectorAll('a');

    anchors.forEach(item => {
        item.addEventListener('click', e => {
            if (item.getAttribute('href')[0] !== '#') return;

            let blockID = item.getAttribute('href').substr(1);

            if (blockID.length === 0) return;

            e.preventDefault();

            let elem = document.getElementById(blockID);

            if (!elem) return;

            let rect = elem.getBoundingClientRect();

            window.scrollTo({
                top: rect.top + window.pageYOffset - 150,
                behavior: 'smooth'
            })
        })
    })
}

export default anchorHandler;