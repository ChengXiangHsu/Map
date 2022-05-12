addEventListener('load', function () {
    let vic = this.document.getElementById('victory');
    let suc = this.document.getElementById('success');
    let rec = this.document.getElementById('recovery');
    let str = this.document.getElementById('strong');
    let ded = this.document.getElementById('dedicated');
    let lix = this.document.getElementById('lixin');
    let che = this.document.getElementById('chenxin');
    vic.addEventListener('click', () => {
        console.log('勝利');
        this.window.scrollTo(0,7000);
    })
    suc.addEventListener('click', () => {
        console.log('成功');
        this.window.scrollTo(0,3600)
    })
    rec.addEventListener('click', () => {
        console.log('光復');
        this.window.scrollTo(0,4600)
    })
    str.addEventListener('click', () => {
        console.log('自強');
        this.window.scrollTo(0,5800)
    })
    ded.addEventListener('click', () => {
        console.log('敬業');
        this.window.scrollTo(0,2800)
    })
    lix.addEventListener('click', () => {
        console.log('力行');
        this.window.scrollTo(0,800)
    })
    che.addEventListener('click', () => {
        console.log('成杏');
        this.window.scrollTo(0,1800)
    })

})