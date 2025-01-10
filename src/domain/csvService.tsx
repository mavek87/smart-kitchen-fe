export function exportTableToCSV() {
    const table = document.getElementById('meal-plan-table') as HTMLTableElement | null;

    if (!table) {
        console.error('Table non found');
        return;
    }

    let csvContent = '';

    // Itera le righe della tabella (header e body)
    for (const row of Array.from(table.rows)) {
        const rowData: string[] = [];
        for (const cell of Array.from(row.cells)) {
            rowData.push(cell.textContent?.trim() || ''); // Ottiene il contenuto della cella
        }
        csvContent += rowData.join(',') + '\n'; // Unisce i dati con la virgola e aggiunge una nuova riga
    }

    // Crea un file Blob con i dati CSV
    const blob = new Blob([csvContent], {type: 'text/csv'});
    const url = URL.createObjectURL(blob);

    // Crea un link per scaricare il file
    const a = document.createElement('a');
    a.href = url;
    a.download = 'meal-plan.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}