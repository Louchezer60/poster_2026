// Translations Dictionary
const translations = {
    en: {
        title: "Extending the Rotational Library of<br>1- and 2-Cyanocyclopentadiene",
        subtitle: "Millimeter-wave Transitions for Astronomical Searches in Hot Cores",
        abstract_title: "Abstract & Key Findings",
        context_label: "Context:",
        context_text: "1- and 2-cyanocyclopentadiene are potential precursors to PAHs and have been detected in TMC-1. However, cm-wave data was insufficient for mm-wave searches in warmer sources.",
        work_label: "This Work:",
        work_text: "We extended the analysis to <strong>75–500 GHz</strong>.",
        findings_1: "Assigned <strong>7200+</strong> transitions (1-cyano-CPD) and <strong>4000+</strong> (2-cyano-CPD).",
        findings_2: "Reached quantum numbers <strong>J=153</strong>.",
        findings_3: "Determined <strong>sextic and octic</strong> distortion constants.",
        findings_4: "Calculated partition functions up to <strong>300 K</strong>.",
        stat_lines_1: "Lines Assigned (1-cyano-CPD)",
        stat_lines_2: "Lines Assigned (2-cyano-CPD)",
        stat_max_j: "Max J Reached",
        setup_title: "Experimental Setup",
        setup_lab_text: "The study was conducted at the <strong>PhLAM laboratory</strong> (University of Lille) using the Fast-scan Terahertz Spectrometer (FAST).",
        setup_figure_caption: "<strong>Figure 1:</strong> Diagram of the Lille Fast-scan absorption spectrometer (FLASH).",
        setup_conditions_title: "Pyrolysis Conditions:",
        setup_cond_precursor: "<strong>Precursor:</strong> 1H-benzotriazole",
        setup_cond_temp: "<strong>Temperature:</strong> 800°C",
        setup_cond_press: "<strong>Pressure:</strong> 1.8 × 10<sup>-2</sup> mbar",
        setup_cond_path: "<strong>Path Length:</strong> 2 m quartz cell",
        setup_specs_title: "Spectrometer Features:",
        setup_spec_range: "<strong>Range Covered:</strong> 75–500 GHz (using VDI multipliers).",
        setup_spec_accuracy: "<strong>Accuracy:</strong> 30–50 kHz (Doppler limited).",
        setup_spec_tech: "<strong>Technology:</strong> Direct Digital Synthesizer (DDS) for fast scanning and precise frequency modulation.",
        results_title: "Spectroscopic Results",
        results_intro: "The following tables summarize the improved rotational constants and partition functions derived from this study.",
        analysis_title: "Analysis & Discussion",
        analysis_subtitle_1: "High-Precision Fitting",
        analysis_text_1: "We successfully assigned transitions up to <strong>J=153</strong> and <strong>K<sub>a</sub>=50</strong> for 1-cyano-CPD (7219 lines) and <strong>K<sub>a</sub>=37</strong> for 2-cyano-CPD (4075 lines). The fit achieved microwave RMS values of <strong>47.5 kHz</strong> and <strong>44.8 kHz</strong> respectively, which are below the estimated peak measurement uncertainties.",
        analysis_text_2: "The 3:1 abundance ratio observed in favor of 1-cyano-CPD is consistent with previous studies, explaining the lower number of assigned transitions for the second isomer.",
        analysis_subtitle_2: "Importance of High-Frequency Data",
        analysis_text_3: "Earlier predictions based on centimeter-wave data diverged significantly (>200 GHz) due to the lack of higher-order centrifugal distortion terms. By extending the range to 500 GHz, we determined <strong>sextic and octic parameters</strong> that are essential for accurate sub-millimeter predictions.",
        analysis_subtitle_3: "Vibrational Contribution",
        analysis_text_4: "At <strong>300 K</strong>, the vibrational partition function (Q<sub>vib</sub>) reaches ~5.95, contributing a factor of nearly <strong>6</strong> to the total partition function. Neglecting this in warm environments (like Hot Cores) would lead to a significant underestimation of molecular column densities.",
        data_title: "Data Availability",
        data_text: "The complete line lists, including assigned frequencies and intensities for both 1- and 2-cyanocyclopentadiene, are available in the Lille Spectroscopic Database (LSD).",
        data_button: "Access Data Repository",
        footer_copyright: "&copy; 2026 Université de Lille - PhLAM Laboratory",
        footer_lab_web: "Lab Website",
        footer_download: "Download Poster",
        footer_print: "Print Information"
    },
    fr: {
        title: "Extension de la Bibliothèque Rotationnelle du<br>1- et 2-cyanocyclopentadiène",
        subtitle: "Transitions millimétriques pour la recherche astronomique dans les cœurs chauds",
        abstract_title: "Résumé & Résultats Clés",
        context_label: "Contexte :",
        context_text: "Le 1- et 2-cyanocyclopentadiène sont des précurseurs potentiels des HAP et ont été détectés dans TMC-1. Cependant, les données en ondes cm étaient insuffisantes pour les recherches en ondes mm dans les sources plus chaudes.",
        work_label: "Ce Travail :",
        work_text: "Nous avons étendu l'analyse à <strong>75–500 GHz</strong>.",
        findings_1: "Attribution de <strong>7200+</strong> transitions (1-cyano-CPD) et <strong>4000+</strong> (2-cyano-CPD).",
        findings_2: "Nombres quantiques atteints <strong>J=153</strong>.",
        findings_3: "Détermination des constantes de distorsion <strong>sextiques et octiques</strong>.",
        findings_4: "Calcul des fonctions de partition jusqu'à <strong>300 K</strong>.",
        stat_lines_1: "Raies Attribuées (1-cyano-CPD)",
        stat_lines_2: "Raies Attribuées (2-cyano-CPD)",
        stat_max_j: "J Max Atteint",
        setup_title: "Dispositif Expérimental",
        setup_lab_text: "L'étude a été menée au <strong>laboratoire PhLAM</strong> (Université de Lille) en utilisant le Spectromètre Terahertz à Balayage Rapide (FAST).",
        setup_figure_caption: "<strong>Figure 1 :</strong> Schéma du spectromètre d'absorption à balayage rapide de Lille (FLASH).",
        setup_conditions_title: "Conditions de Pyrolyse :",
        setup_cond_precursor: "<strong>Précurseur :</strong> 1H-benzotriazole",
        setup_cond_temp: "<strong>Température :</strong> 800°C",
        setup_cond_press: "<strong>Pression :</strong> 1.8 × 10<sup>-2</sup> mbar",
        setup_cond_path: "<strong>Longueur du Parcours :</strong> 2 m cellule en quartz",
        setup_specs_title: "Caractéristiques du Spectromètre :",
        setup_spec_range: "<strong>Plage Couverte :</strong> 75–500 GHz (avec multiplicateurs VDI).",
        setup_spec_accuracy: "<strong>Précision :</strong> 30–50 kHz (limité par Doppler).",
        setup_spec_tech: "<strong>Technologie :</strong> Synthétiseur Numérique Direct (DDS) pour un balayage rapide et une modulation de fréquence précise.",
        results_title: "Résultats Spectroscopiques",
        results_intro: "Les tableaux suivants résument les constantes rotationnelles améliorées et les fonctions de partition dérivées de cette étude.",
        analysis_title: "Analyse & Discussion",
        analysis_subtitle_1: "Ajustement de Haute Précision",
        analysis_text_1: "Nous avons attribué des transitions jusqu'à <strong>J=153</strong> et <strong>K<sub>a</sub>=50</strong> pour le 1-cyano-CPD (7219 raies) et <strong>K<sub>a</sub>=37</strong> pour le 2-cyano-CPD (4075 raies). L'ajustement a atteint des valeurs RMS de <strong>47.5 kHz</strong> et <strong>44.8 kHz</strong> respectivement, ce qui est inférieur aux incertitudes de mesure estimées.",
        analysis_text_2: "Le rapport d'abondance de 3:1 observé en faveur du 1-cyano-CPD est cohérent avec les études précédentes, expliquant le nombre inférieur de transitions attribuées pour le second isomère.",
        analysis_subtitle_2: "Importance des Données Haute Fréquence",
        analysis_text_3: "Les prédictions précédentes basées sur des données en ondes centimétriques divergeaient significativement (>200 GHz) en raison du manque de termes de distorsion centrifuge d'ordre supérieur. En étendant la gamme à 500 GHz, nous avons déterminé des <strong>paramètres sextiques et octiques</strong> essentiels pour des prédictions submillimétriques précises.",
        analysis_subtitle_3: "Contribution Vibrationnelle",
        analysis_text_4: "À <strong>300 K</strong>, la fonction de partition vibrationnelle (Q<sub>vib</sub>) atteint ~5.95, contribuant d'un facteur de près de <strong>6</strong> à la fonction de partition totale. Négliger cela dans les environnements chauds (comme les cœurs chauds) conduirait à une sous-estimation significative des densités de colonne moléculaires.",
        data_title: "Disponibilité des Données",
        data_text: "Les listes complètes de raies, incluant les fréquences et intensités attribuées pour le 1- et 2-cyanocyclopentadiène, sont disponibles dans la Lille Spectroscopic Database (LSD).",
        data_button: "Accéder au Dépôt de Données",
        footer_copyright: "&copy; 2026 Université de Lille - Laboratoire PhLAM",
        footer_lab_web: "Site du Labo",
        footer_download: "Télécharger le Poster",
        footer_print: "Imprimer les Infos"
    },
    es: {
        title: "Ampliación de la Biblioteca Rotacional de<br>1- y 2-cianociclopentadieno",
        subtitle: "Transiciones de ondas milimétricas para búsquedas astronómicas en núcleos calientes",
        abstract_title: "Resumen y Hallazgos Clave",
        context_label: "Contexto:",
        context_text: "El 1- y 2-cianociclopentadieno son precursores potenciales de los HAP y han sido detectados en TMC-1. Sin embargo, los datos de ondas cm eran insuficientes para búsquedas de ondas mm en fuentes más cálidas.",
        work_label: "Este Trabajo:",
        work_text: "Extendimos el análisis a <strong>75–500 GHz</strong>.",
        findings_1: "Asignadas <strong>7200+</strong> transiciones (1-cyano-CPD) y <strong>4000+</strong> (2-cyano-CPD).",
        findings_2: "Números cuánticos alcanzados <strong>J=153</strong>.",
        findings_3: "Determinación de constantes de distorsión <strong>séxticas y ócticas</strong>.",
        findings_4: "Cálculo de funciones de partición hasta <strong>300 K</strong>.",
        stat_lines_1: "Líneas Asignadas (1-cyano-CPD)",
        stat_lines_2: "Líneas Asignadas (2-cyano-CPD)",
        stat_max_j: "J Máximo Alcanzado",
        setup_title: "Configuración Experimental",
        setup_lab_text: "El estudio se realizó en el <strong>laboratorio PhLAM</strong> (Universidad de Lille) utilizando el Espectrómetro de Terahercios de Barrido Rápido (FAST).",
        setup_figure_caption: "<strong>Figura 1:</strong> Diagrama del espectrómetro de absorción de barrido rápido de Lille (FLASH).",
        setup_conditions_title: "Condiciones de Pirólisis:",
        setup_cond_precursor: "<strong>Precursor:</strong> 1H-benzotriazol",
        setup_cond_temp: "<strong>Temperatura:</strong> 800°C",
        setup_cond_press: "<strong>Presión:</strong> 1.8 × 10<sup>-2</sup> mbar",
        setup_cond_path: "<strong>Longitud del Camino:</strong> 2 m celda de cuarzo",
        setup_specs_title: "Características del Espectrómetro:",
        setup_spec_range: "<strong>Rango Cubierto:</strong> 75–500 GHz (usando multiplicadores VDI).",
        setup_spec_accuracy: "<strong>Precisión:</strong> 30–50 kHz (limitado por Doppler).",
        setup_spec_tech: "<strong>Tecnología:</strong> Sintetizador Digital Directo (DDS) para barrido rápido y modulación de frecuencia precisa.",
        results_title: "Resultados Espectroscópicos",
        results_intro: "Las siguientes tablas resumen las constantes rotacionales mejoradas y las funciones de partición derivadas de este estudio.",
        analysis_title: "Análisis y Discusión",
        analysis_subtitle_1: "Ajuste de Alta Precisión",
        analysis_text_1: "Asignamos con éxito transiciones hasta <strong>J=153</strong> y <strong>K<sub>a</sub>=50</strong> para 1-cyano-CPD (7219 líneas) y <strong>K<sub>a</sub>=37</strong> para 2-cyano-CPD (4075 líneas). El ajuste logró valores RMS de microondas de <strong>47.5 kHz</strong> y <strong>44.8 kHz</strong> respectivamente, por debajo de las incertidumbres estimadas.",
        analysis_text_2: "La relación de abundancia de 3:1 observada a favor de 1-cyano-CPD es consistente con estudios previos, lo que explica el menor número de transiciones asignadas para el segundo isómero.",
        analysis_subtitle_2: "Importancia de Datos de Alta Frecuencia",
        analysis_text_3: "Las predicciones anteriores basadas en datos de ondas centimétricas divergían significativamente (>200 GHz) debido a la falta de términos de distorsión centrífuga de orden superior. Al extender el rango a 500 GHz, determinamos <strong>parámetros séxticos y ócticos</strong> esenciales para predicciones submilimétricas precisas.",
        analysis_subtitle_3: "Contribución Vibracional",
        analysis_text_4: "A <strong>300 K</strong>, la función de partición vibracional (Q<sub>vib</sub>) alcanza ~5.95, contribuyendo con un factor de casi <strong>6</strong> a la función de partición total. Descuidar esto en entornos cálidos conduciría a una subestimación significativa de las densidades de columna moleculares.",
        data_title: "Disponibilidad de Datos",
        data_text: "Las listas completas de líneas, incluidas las frecuencias e intensidades asignadas para 1- y 2-cianociclopentadieno, están disponibles en la Lille Spectroscopic Database (LSD).",
        data_button: "Acceder al Repositorio de Datos",
        footer_copyright: "&copy; 2026 Université de Lille - Laboratorio PhLAM",
        footer_lab_web: "Sitio del Lab",
        footer_download: "Descargar Póster",
        footer_print: "Imprimir Información"
    }
};

// Language Switching Function
function changeLanguage(lang) {
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });

    // Update text content
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

// Intersection Observer for Fade-in Animations (Keep existing functionality)
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // If the entry is a stat-number, trigger counter animation
                if (entry.target.classList.contains('stats-grid')) {
                    const counters = entry.target.querySelectorAll('.stat-number');
                    counters.forEach(counter => {
                        const target = parseInt(counter.getAttribute('data-target'));
                        animateValue(counter, 0, target, 2000);
                    });
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with .fade-in class
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    // Observe stats grid specifically to trigger counting when visible
    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) observer.observe(statsGrid);
});

// Number Counter Animation Function
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        // Format with commas for large numbers
        const currentVal = Math.floor(progress * (end - start) + start);
        obj.innerHTML = currentVal.toLocaleString();

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}
