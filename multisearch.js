var content = [
    {id: 0, text: "Cardiology"},
    {id: 1, text: "Dermatology "},
    {id: 2, text: "Endocrinology"},
];


 $(".prompt").select2({
     data:content,
     // minimumInputLength: 2,
     width: '100%',
     multiple:true,
     placeholder:"Choose Speialization",
     // templateResult:formatState

 });