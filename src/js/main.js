const levels = {
    level1: [
        { event: "Muerte de Franco", year: 1975, src: 'assets/images/events/level1/1-franco.jpg' },
        { event: "España gana por 12-1 a Malta", year: 1983, src: 'assets/images/events/level1/2-malta.jpg' },
        { event: "Empiezan a emitir las televisiones privadas (Antena 3, Telecinco y Canal+)", year: 1990, src: 'assets/images/events/level1/3-tv.jpg' },
        { event: "Se inaugura el AVE Madrid-Sevilla", year: 1992, src: 'assets/images/events/level1/4-ave.jpg' },
        { event: "Desaparece la peseta. El euro única moneda oficial", year: 2002, src: 'assets/images/events/level1/5-pesetas.jpg' },
        { event: "Felipe de Borbón se casa con Doña Letizia Ortiz", year: 2004, src: 'assets/images/events/level1/6-boda.jpg' },
        { event: "España, campeona del mundo de fútbol", year: 2010, src: 'assets/images/events/level1/7-mundial.jpg' },
        { event: "Don Juan Carlos I abdica", year: 2014, src: 'assets/images/events/level1/8-abdicar.jpg' }
    ],
    level2: [
        { event: "El Guernica regresa a España", year: 1981, src: 'assets/images/events/level2/1-franco.jpg' },
        { event: "Primera película española que gana un Óscar: ‘Volver a empezar’ de José Luis Garci", year: 1982, src: 'assets/images/events/level2/2-malta.jpg' },
        { event: "España ingresa en la Comunidad Económica Europea y la OTAN", year: 1986, src: 'assets/images/events/level2/3-tv.jpg' },
        { event: "Atentado de Hipercor y la casa cuartel de Zaragoza, dos de las mayores matanzas de ETA", year: 1987, src: 'assets/images/events/level2/4-ave.jpg' },
        { event: "Camilo José Cela gana el premio Nobel de Literatura", year: 1989, src: 'assets/images/events/level2/5-pesetas.jpg' },
        { event: "Se acaba la EGB y entra la ESO", year: 1995, src: 'assets/images/events/level2/6-boda.jpg' },
        { event: "Desaparece la mili", year: 2001, src: 'assets/images/events/level2/7-mundial.jpg' },
        { event: "El “¿por qué no te callas?”, del Rey Juan Carlos a Hugo Chávez.", year: 2007, src: 'assets/images/events/level2/8-abdicar.jpg' }
    ],
    level3: [
        { event: "Primer concierto de los Rolling en España", year: 1976, src: 'assets/images/events/level3/1-franco.jpg' },
        { event: "Fin de la censura (se deroga la Ley de Prensa e Imprenta de 1966)", year: 1977, src: 'assets/images/events/level3/2-malta.jpg' },
        { event: "Primera marcha del Orgullo en Madrid", year: 1978, src: 'assets/images/events/level3/3-tv.jpg' },
        { event: "Nace el primer niño en España por fecundación in vitro", year: 1984, src: 'assets/images/events/level3/4-ave.jpg' },
        { event: "Primer ingreso de mujeres en la Policía Nacional", year: 1985, src: 'assets/images/events/level3/5-pesetas.jpg' },
        { event: "Legalizado el matrimonio homosexual", year: 2005, src: 'assets/images/events/level3/6-boda.jpg' },
        { event: "Entra en vigor la ley antitabaco", year: 2006, src: 'assets/images/events/level3/7-mundial.jpg' },
        { event: "Fin de ETA. La banda anuncia el “cese definitivo de su actividad armada”", year: 2011, src: 'assets/images/events/level3/8-abdicar.jpg' }
    ]
};

function selectLevel() {
    const numLevels = document.querySelectorAll('.v-gk-lvl-sel__btns *[data-level]');
    const startGameBtn = document.getElementById('startGameBtn');
}

document.addEventListener("DOMContentLoaded", () => {
    selectLevel();
});

