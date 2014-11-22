
(function() {
    angular.module('DemoApp',[])
        .controller('Demo', Demo);

    function Demo(){
        var demo = this;
        demo.table2PDF = table2PDF;
        demo.table2PDF2 = table2PDF2;
        /////////////////////////////////////

        function table2PDF(){
            var pdf = new jsPDF('p', 'pt', 'letter'),
            source = $('#customers')[0],
            specialElementHandlers = {
                '#bypassme': function(element, renderer) {
                    return true
                }
            },
            margins = {
                top: 0,
                bottom: 10,
                left: 10,
                width: 100
            };
            // all coords and widths are in jsPDF instance's declared units
            // 'inches' in this case
            pdf.fromHTML(
                source, // HTML string or DOM elem ref.
                margins.left, // x coord
                margins.top, {// y coord
                    'width': margins.width, // max width of content on PDF
                    'elementHandlers': specialElementHandlers
                },
                function(dispose) {
                    // dispose: object with X, Y of the last line add to the PDF
                    //          this allow the insertion of new lines after html
                    pdf.save('Test.pdf');
                }
                , margins);
        }

        function table2PDF2(){
            var docDefinition = {
                content: {
                    table: {
                            body: [
                                ['Column 1', 'Column 2', 'Column 3'],
                                ['One value goes here', 'Another one here', 'OK?']
                            ]
                    }
                }
            };
            pdfMake.createPdf(docDefinition).download();
        }

    }
})();

