function generateCalendar(data) {
  return `
  <tr>
    <td>
      <div class="card horizontal">
        <div class="card-content z-depth-2 amber">
          ${data.date.iso}
        </div>
        <div class="card-content">
          <p><strong>${data.type[0]} - ${data.name}</strong></>
          <p>${data.description}</p>
        </div>
      </div>
    </td>
  </tr>
  `
}