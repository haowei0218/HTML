function showdemo(index) {
    const demo = document.querySelector('.showdemo');
    console.log('demo', demo);
    switch (index) {
        case 'program':
            demo.innerHTML = `<iframe src="../program_blogs/index.html" width="100%" height="100%"/>`;
            break;
        case 'complete_responsive':
            demo.innerHTML = `<iframe src="../complete responsive/index.html" width="100%" height="100%"/>`;
            break;
    }
}