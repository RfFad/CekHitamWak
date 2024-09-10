function cekhodam(e) {
    e.preventDefault();
    let nama = document.querySelector('#search').value;
    if (nama === '') {
        alert('nama tidak boleh kosong');
    } else {
        const result = document.querySelector('#result');
        const image = document.querySelector('#gmbr-hitam');

        let hitam = ['mas rusdi', 'psht', 'si imut', 'farhan kebab', 'mas amba', 'Ilham Penyu', 'si geram', 'rehanslebew'];
        let imageHitam = ['masrusdi.webp', 'psht.jpg', 'siimut.jpg', 'farhankebab.webp', 'masamba.jpg', 'ilhampenyu.jpg', 'geramnyaaku.jpg', 'rehanslebew'];
        const hitamStatus = Math.floor(Math.random() * hitam.length);

        result.innerHTML = `${nama}, khodam hitam kamu (${hitam[hitamStatus]})`;
        image.src = imageHitam[hitamStatus]; // Ensure image is displayed

        const search = document.querySelector('#search');
        search.value = '';
    }
}

const button = document.querySelector('#btn-search');
button.addEventListener('click', cekhodam);
