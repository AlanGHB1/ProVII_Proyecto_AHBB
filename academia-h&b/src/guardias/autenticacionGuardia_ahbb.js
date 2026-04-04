const obtenerUsuarioActivo_ahbb = () => {
  const token_ahbb = localStorage.getItem('certificaciones_token_ahbb');
  const usuario_ahbb = localStorage.getItem('certificaciones_usuario_ahbb');

  if (!token_ahbb || !usuario_ahbb) {
    return null;
  }

  try {
    return JSON.parse(usuario_ahbb);
  } catch {
    localStorage.removeItem('certificaciones_token_ahbb');
    localStorage.removeItem('certificaciones_usuario_ahbb');
    return null;
  }
};

export const guardiaNavegacion_ahbb = (
  destino_ahbb,
  _origen_ahbb,
  siguiente_ahbb,
) => {
  const esPublica_ahbb = destino_ahbb.meta.publica_ahbb === true;
  const usuario_ahbb = obtenerUsuarioActivo_ahbb();
  const estaAutenticado_ahbb = usuario_ahbb !== null;

  if (esPublica_ahbb && !estaAutenticado_ahbb) {
    siguiente_ahbb();
    return;
  }

  if (
    estaAutenticado_ahbb &&
    (destino_ahbb.name === 'login' || destino_ahbb.name === 'registro')
  ) {
    siguiente_ahbb({ name: 'dashboard' });
    return;
  }

  if (esPublica_ahbb && estaAutenticado_ahbb) {
    siguiente_ahbb();
    return;
  }

  if (!estaAutenticado_ahbb) {
    siguiente_ahbb({ name: 'login' });
    return;
  }

  const rolesPermitidos_ahbb = destino_ahbb.meta.rolesPermitidos_ahbb;
  if (rolesPermitidos_ahbb?.length) {
    const tienePermiso_ahbb = rolesPermitidos_ahbb.includes(usuario_ahbb.rol);
    if (!tienePermiso_ahbb) {
      siguiente_ahbb({ name: 'dashboard' });
      return;
    }
  }

  siguiente_ahbb();
};
