---
title: "TFG — Cliente INDIGO en Python"
description: "Cliente INDIGO en Python con GUI para CCD, rueda de filtros y enfocador; servidor local para pruebas y documentación técnica con Sphinx."
tech:
  - Python
  - Tkinter
  - INDIGO
  - Make
  - Sphinx
  - Linux
featured: false
order: 50
cover: "/TFG.png"
gallery:
  - "/TFG.png"
repo: "https://github.com/Arturo4102/TFG_indigo"
demo: ""
---
Desarrollo del **Trabajo de Fin de Grado** centrado en construir un **cliente INDIGO** en Python para gestionar dispositivos astronómicos.  
Incluye:

- **myIndigoLibrary/** (biblioteca y GUI, requisitos, instalación y docs).
- **indigo-master/** modificado para lanzar **servidor de pruebas** con `indigo_ccd_simulator`.
- Guías para **entorno virtual**, dependencias y build del servidor en Linux.
- Generación de documentación con **Sphinx**.

> Ejecutar GUI: `python3 myIndigoLibrary/myIndigoLibrary/Cliente_INDIGO_Gui.py`  
> Servidor de prueba: `./build/bin/indigo_server -v indigo_ccd_simulator`
