// Bai01
const btnScore = document.getElementById('btn_score');

function totalScore(score1, score2, score3, area, type){
    return (score1 + score2 + score3 + area + type)
};

btnScore.addEventListener('click', function(e){
    e.preventDefault();
    const sc0 = parseFloat(document.getElementById('b01-diem-chuan').value);
    const sc1 = parseFloat(document.getElementById('b01-diem01').value);
    const sc2 = parseFloat(document.getElementById('b01-diem02').value);
    const sc3 = parseFloat(document.getElementById('b01-diem03').value);
    const typePerson = document.getElementById('b01-khu-vuc').value;
    const area = document.getElementById('b01-doi-tuong').value;

    var scType;
    var scArea;

    if(typePerson == 'X'){
        scType = 0;
    }
    else if(typePerson == 'A'){
        scType = 2;
    }
    else if(typePerson  == 'B'){
        scType = 1;
    }
    else{
        scType = 0.5;
    }

    if(area == '0'){
        scArea = 0;
    }
    else if(area == '1'){
        scArea = 2.5;
    }
    else if(area  == '2'){
        scArea = 1.5;
    }
    else{
        scArea = 1;
    }

    if(totalScore(sc1, sc2, sc3, scArea, scType) >= sc0){
        document.getElementById('value-rs1').innerHTML = "Chúc mừng bạn đã đậu với số điểm " + totalScore(sc1, sc2, sc3, scArea, scType);
    }
    else{
        document.getElementById('value-rs1').innerHTML = "Chúc may mắn lần sau."
    }
});


// Bai 02
const btnFee = document.getElementById('btn_fee');

function TinhTienDien(kw){
    const bac1 = 500;
    const bac2 = 650;
    const bac3 = 850;
    const bac4 = 1100;
    const bac5 = 1300;

    
    var total = 0;
    if(kw <= 50){
        total = kw*bac1;
    }
    else if(kw > 50 && kw <= 100){
        total = 50*bac1 + (kw - 50)*bac2;
    }
    else if(kw > 100 && kw <= 200){
        total = 50*bac1 + 50*bac2 + (kw - 100)*bac3;
    }
    else if(kw > 200 && kw <= 350){
        total = 50*bac1 + 50*bac2 + 100*bac3 + (kw - 150)*bac4;
    }
    else{
        total = 50*bac1 + 50*bac2 + 100*bac3 + 150*bac4 + (kw - 250)*bac5;
    }
    return total;
}

btnFee.addEventListener('click', function(e) {
    e.preventDefault();
    const name = document.getElementById('b02-ho-ten').value;
    const soKw = parseInt(document.getElementById('b02-so-kw').value);

    document.getElementById('value-rs2').innerHTML = "Khách hàng " + name + " đã dùng " + soKw + " kw, số tiền điện là " + TinhTienDien(soKw) + " VND";
});

