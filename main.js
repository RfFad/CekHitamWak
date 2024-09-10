function cekhodam(e) {
    e.preventDefault();
    let nama = document.querySelector('#search').value;
    if (nama === '') {
        alert('nama tidak boleh kosong');
    } else {
        let status = ['isi', 'kosong'];
        const randomStatus = Math.floor(Math.random() * status.length);
        const result = document.querySelector('#result');
        const image = document.querySelector('#gmbr-hitam');
        
        if (status[randomStatus] === 'isi') {
            let hitam = ['mas rusdi', 'psht', 'si imut', 'farhan kebab', 'mas amba', 'Ilham Penyu', 'si geram', 'rehanslebew'];
            let imageHitam = ['masrusdi.webp', 'psht.jpg', 'siimut.jpg', 'farhankebab.webp', 'masamba.jpg', 'ilhampenyu.jpg', 'geramnyaaku.jpg', 'rehanslebew'];
            const hitamStatus = Math.floor(Math.random() * hitam.length);

            result.innerHTML = `${nama}, khodam hitam kamu (${hitam[hitamStatus]})`;
            image.src = imageHitam[hitamStatus]; 
            const search = document.querySelector('#search');
            search.value = '';
        } else {
            result.innerHTML = `${nama}, khodam hitam kamu kosong`;
            image.style.display = 'none'; // Hide image if khodam is empty
            const search = document.querySelector('#search');
            search.value = '';
        }
    }
}

const button = document.querySelector('#btn-search');
button.addEventListener('click', cekhodam);
