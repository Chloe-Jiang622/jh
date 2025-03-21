document.getElementById('change-poem-button').addEventListener('click', function () {
    const newPoem = `
        《秋夜思》<br>
        秋夜沉沉月满天，<br>
        寒蛩泣露草阶前。<br>
        幽思缕缕心头绕，<br>
        独倚栏杆念旧年。
    `;
    document.getElementById('poem').innerHTML = newPoem;
});
