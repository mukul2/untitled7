// Define font files
var fonts = {
    Roboto: {
        normal: 'fonts/Roboto-Regular.ttf',
        bold: 'fonts/Roboto-Medium.ttf',
        italics: 'fonts/Roboto-Italic.ttf',
        bolditalics: 'fonts/Roboto-MediumItalic.ttf'
    }
};

var PdfPrinter = require('pdfmake');
var printer = new PdfPrinter(fonts);
var fs = require('fs');
// playground requires you to assign document definition to a variable called dd



var dd = {
    content: [
        {
            table: {
                layout: 'noBorders',
                widths: [100, '*', 100, ],
                body: [

                    [

                        {
                            image: 'sunny.jpeg',
                            width: 100,
                            alignment:'center'
                        },
                        {
                            stack: [

                                {text: 'Fixing Test Report', alignment:'center',style :{italics:true,fontSize: 28,}},
                                {text: 'VJ Technology, Brunswick Road, Cobbs Wood Ind. Estate, Ashford, Kent,' +
                                        'TN23 1EN. T 01233 637695', alignment:'center',style :{italics:true,fontSize: 8,}},
                            ],
                            style: 'header'
                        },
                        {
                            image: 'sunny.jpeg',
                            width: 100,
                            alignment:'center'
                        },

                    ]
                ]
            },
            layout: 'noBorders',
            style: 'header'
        },

        {
            style: 'tableExample',
            color: '#444',
            table: {
                widths: [90,180,80,130],

                // keepWithHeaderRows: 1,
                body: [
                    ['Site test report', 'Tensile loading - CFA compliant', 'Date of test','22 June 2022'],
                    [{colSpan: 1,text:'Report code' }, {colSpan: 3,text:'VJTASH TR VJT 22-Jun-22 RR22062022AG' }],




                ]
            }
        },
        {
            style: 'tableExample',
            color: '#444',
            table: {
                widths: [163,163,163],
                body: [
                    [{border: [true, false, true, true],colSpan: 1,text:'Client details' },
                        {border: [true, false, true, true],colSpan: 1,text:'Site details' },
                        {border: [true, false, true, true],colSpan: 1,text:'Witnessed by' },
                    ],
                    [{colSpan: 1,text:'Advanced Glass Ltd\n' +
                            'No 6 Watling Close\n' +
                            'Sketchley Meadows Industrial\n' +
                            'Estate\n' +
                            'Hinckley\n' +
                            'LE10 3EZ' },
                        {colSpan: 1,text:'Brent Cross Station\n' +
                                'Brent Terrace\n' +
                                'London\n' +
                                'NW2 1LN' },
                        {colSpan: 1,text:'Ian Harvey (Avanced Glass)\n' +
                                'Suresh Kandapillai (VFL)\n' +
                                'Vince Kenny (Mace)' }
                    ],

                ]
            }
        },
        {
            style: 'tableExample',
            color: '#444',
            table: {
                widths: [120,120,120,120],
                body: [
                    [{border: [true, false, true, true],colSpan: 1,text:'Test conducted by' }, {border: [true, false, true, true],colSpan: 3,text:'R. Rett' },],
                    [{colSpan: 1,text:'Fixing type' }, {colSpan: 3,text:'(05100290) CAS5 M12 x 160 A4/70 SS' },],
                    [{colSpan: 1,text:'Resin type' }, {colSpan: 3,text:'(06000075) V420+ v3 Hybrid Injection Mortar 420ml' },],
                    [{colSpan: 1,text:'Base material' }, {colSpan: 3,text:'Concrete C40/50' },],
                    [{colSpan: 1,text:'Proof/ultimate/prelim' }, {colSpan: 3,text:'Preliminary' },],


                ]
            }
        },
        {
            style: 'tableExample',
            color: '#444',
            table: {
                widths: [120,120,120,120],
                body: [

                    [{border: [true, false, true, true],colSpan: 1,text:'Hole diameter (mm)' }, {border: [true, false, true, true],colSpan: 1,text:'14' },{border: [true, false, true, true],colSpan: 1,text:'Edge distance (mm)' }, {border: [true, false, true, true],colSpan: 1,text:'55' },],
                    [{colSpan: 1,text:'Hole depth (mm)' }, {colSpan: 1,text:'135' },{colSpan: 1,text:'Anchor centres (mm)' }, {colSpan: 1,text:'55' },],


                ]
            }
        },
        {
            style: 'tableExample',
            color: '#444',
            table: {
                widths: [220,30,200,30],
                body: [

                    [{	border: [true, false, true, true],text:'Recommended embedment depth (mm)' }, {text:'14' },{border: [true, false, true, true],text:'Actual embedment depth (mm)' }, {text:'55' },],
                    [{text:'Temperature when installed (°C)' }, {text:'135' },{text:'Curing time (if applicable)' }, {text:'55' },],


                ]
            }
        },
    ]
}




var pdfDoc = printer.createPdfKitDocument(dd);
pdfDoc.pipe(fs.createWriteStream('document.pdf'));
pdfDoc.end();