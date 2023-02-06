/*
let a = {
  naziv: "neki objekt"
  };
  a.unutarnji = a;
  console.log(a.unutarnji.unutarnji.unutarnji.naziv);
  console.log(a);
  */



  let string = prompt('Name?');

  let students = [
    {
    ime: "Marko",
    prezime: "Marković",
    upisan: true
    },
    {
    ime: "Iva",
    prezime: "Ivić",
    upisan: true
    },
    {
    ime: "Lucija",
    prezime: "Lucić",
    upisan: false
    },
    {
    ime: "Nikola",
    prezime: "Nikolić",
    upisan: false
    },
    {
    ime: "Marko",
    prezime: "Susa",
    upisan: false
    },
    {
    ime: "Bojan",
    prezime: "Tomic",
    upisan: false
    },
    {
    ime: "Zdravka",
    prezime: "Jojic",
    upisan: true
    },
    {
    ime: "Vlastimir",
    prezime: "Cvijic",
    upisan: false
    },
    {
    ime: "Branko",
    prezime: "Babic",
    upisan: false
    },
    {
    ime: "Stevan",
    prezime: "Sremac",
    upisan: true
    }
    ];

    let check = (list, name) => {
      let lowerName = name.toLowerCase();
      for (let i = 0; i < list.length; i++) {
        let lowerIme = (list[i].ime.toLowerCase());
        if (lowerIme.includes(lowerName) && list[i].upisan === true) {
          alert(list[i].prezime + ", " + list[i].ime + " je upisan/a")
        }
        else if (lowerIme.includes(lowerName) && list[i].upisan === false) {
          alert(list[i].prezime + ", " + list[i].ime + " nije upisan/a")
        } 
      }
    }

    check(students, string)
    