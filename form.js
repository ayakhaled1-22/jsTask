document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('dataForm');
    const tableBody = document.querySelector('#dataTable tbody');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // لمنع إعادة تحميل الصفحة

        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;

        // إنشاء صف جديد في الجدول
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const ageCell = document.createElement('td');

        nameCell.textContent = name;
        ageCell.textContent = age;

        row.appendChild(nameCell);
        row.appendChild(ageCell);

        tableBody.appendChild(row);

        // إعادة تعيين النموذج
        form.reset();
    });
});
