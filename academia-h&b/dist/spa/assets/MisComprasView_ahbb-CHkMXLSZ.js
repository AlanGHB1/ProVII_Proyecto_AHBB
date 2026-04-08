import{B as e,M as t,P as n,V as r,Y as i,_t as a,c as o,d as s,et as c,h as l,k as u,l as d,m as f,r as p,s as m,u as ee}from"./runtime-core.esm-bundler-DeSBoGAl.js";import{t as h}from"./QBtn-Btz7kLDM.js";import{t as g}from"./QIcon-CQQRUI-9.js";import{t as te}from"./QDialog-DeEAJa8l.js";import{t as _}from"./QCard-DVUblgmm.js";import{$ as ne,A as re,G as ie,J as v,K as y,N as b,P as ae,c as oe,l as x,r as S,s as se}from"./index-CIJmMdUN.js";import{t as C}from"./QChip-Ddp1T9rt.js";import{t as ce}from"./QSpinnerDots-DBwP-ruu.js";import{t as le}from"./QSelect-BmaoA5JC.js";import{t as ue}from"./QMarkupTable-C7JOJ6t9.js";import{t as de}from"./QBtnToggle-Dyl9sbQd.js";import{t as fe}from"./date-FIWth1rU.js";var pe={class:`row items-center q-mb-lg`},me={class:`row q-col-gutter-md items-end`},he={class:`col-12 col-md-4`},ge={class:`col-12 col-md-4`},w={class:`col-12 col-md-3`},T={class:`col-12 col-md-1`},E={key:0,class:`flex flex-center q-pa-xl`},D={key:1},O={class:`row q-col-gutter-md`},k={class:`row justify-between items-center`},A={class:`row items-center q-gutter-sm`},j={class:`text-body2 text-weight-bold`},M={class:`text-body2 text-mono`},N={class:`row items-center q-gutter-sm`},P={class:`text-primary text-weight-bold text-body1`},F=[`src`,`alt`],I={class:`col`},L={class:`text-body2 text-weight-medium`},_e={class:`text-caption text-grey-7`},ve={class:`text-body2 text-weight-bold text-right`,style:{"min-width":`80px`}},ye={key:2,class:`text-center q-pa-xl text-grey-6`},be={class:`text-h6 q-mt-md`},xe={key:0,class:`factura-hoja q-pa-xl bg-white`},Se={class:`row justify-between items-start q-mb-xl`},Ce={class:`text-right`},we={class:`text-h5 text-weight-bold text-dark q-mt-xs`},Te={class:`text-body2 text-grey-7`},Ee={class:`row items-center q-gutter-sm`},De=[`src`],Oe={class:`text-body2 text-weight-medium`},ke={class:`text-caption text-grey-6 text-capitalize`},Ae={class:`text-center`},je={class:`text-right`},Me={class:`text-right text-weight-bold`},Ne={class:`row justify-end`},Pe={style:{"min-width":`280px`}},Fe={class:`row justify-between q-py-xs`},Ie={class:`text-weight-medium`},Le={class:`row justify-between q-py-xs`},Re={class:`text-grey-7`},ze={class:`text-weight-medium`},Be={class:`row justify-between q-py-xs bg-primary text-white q-px-sm`,style:{"border-radius":`6px`}},Ve={class:`text-weight-bolder text-h6`},He={class:`text-caption text-grey-6 q-mt-xs text-right`},R=se({__name:`MisComprasView_ahbb`,setup(se){let R=oe(),z=i(!0),B=i(``),V=i(`anio`),H=i(``),U=i(``),W=i(``),Ue=[{label:`Por Año`,value:`anio`,icon:`event_note`},{label:`Por Mes`,value:`mes`,icon:`calendar_view_month`},{label:`Fecha Exacta`,value:`exacta`,icon:`today`}],G=i(null),K=i(!1),q=e=>{G.value=e,K.value=!0},J=e=>e?fe.formatDate(e,`DD/MM/YYYY HH:mm`):`—`,Y=e=>{switch(e){case`pagada`:return`positive`;case`pendiente`:return`warning`;case`cancelada`:return`negative`;default:return`grey`}},X=e=>{switch(e){case`pagada`:return`Pagada`;case`pendiente`:return`En Revisión`;case`cancelada`:return`Cancelada`;default:return e}},Z=m(()=>{let e=R.historialFacturas_ahbb;if(B.value.trim()){let t=B.value.trim().toLowerCase();e=e.filter(e=>e.nroReferenciaPago_ahbb?.toLowerCase().includes(t))}return e=e.filter(e=>{let t=new Date(e.fechaFactura_ahbb);if(V.value===`anio`&&H.value)return t.getFullYear()===Number(H.value);if(V.value===`mes`&&U.value){let[e,n]=U.value.split(`-`).map(Number);return t.getFullYear()===e&&t.getMonth()+1===n}if(V.value===`exacta`&&W.value){let[e,n,r]=W.value.split(`-`).map(Number);return t.getFullYear()===e&&t.getMonth()+1===n&&t.getDate()===r}return!0}),e}),We=m(()=>V.value===`anio`&&!!H.value||V.value===`mes`&&!!U.value||V.value===`exacta`&&!!W.value),Q=e=>{if(e.desglose_ahbb)return e.desglose_ahbb;let t=e.detalles_ahbb?.reduce((e,t)=>e+Number(t.precioUnitario_ahbb)*t.cantidad_ahbb,0)??0,n=t*.16;return{subtotal:+t.toFixed(2),ivaPorcentaje:16,ivaMontoUSD:+n.toFixed(2),totalConIva:+(t+n).toFixed(2)}},$=()=>{B.value=``,H.value=``,U.value=``,W.value=``},Ge=e=>{if(!e)return;let t=Q(e),n=e.detalles_ahbb?.map(e=>`
    <tr>
      <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0;">
        <div style="font-weight: 600; color: #1e293b;">${e.producto_ahbb?.nombre_ahbb??``}</div>
        <div style="font-size: 11px; color: #64748b; text-transform: capitalize;">${e.producto_ahbb?.categoria_ahbb??``}</div>
      </td>
      <td style="padding: 10px 12px; text-align: center; border-bottom: 1px solid #e2e8f0;">${e.cantidad_ahbb}</td>
      <td style="padding: 10px 12px; text-align: right; border-bottom: 1px solid #e2e8f0;">$${Number(e.precioUnitario_ahbb).toFixed(2)}</td>
      <td style="padding: 10px 12px; text-align: right; border-bottom: 1px solid #e2e8f0; font-weight: 700;">$${(e.cantidad_ahbb*Number(e.precioUnitario_ahbb)).toFixed(2)}</td>
    </tr>
  `).join(``)??``,r=`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <title>Factura — Academia H&B</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; color: #1e293b; background: #fff; padding: 40px; }
        .membrete { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 36px; }
        .academia-nombre { font-size: 26px; font-weight: 900; color: #1b2a4a; }
        .academia-nombre span { color: #f59e0b; }
        .academia-sub { font-size: 12px; color: #64748b; margin-top: 4px; line-height: 1.8; }
        .factura-id { text-align: right; }
        .factura-id .label { font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; }
        .factura-id .ref { font-size: 20px; font-weight: 800; color: #1b2a4a; font-family: 'Courier New', monospace; }
        .factura-id .fecha { font-size: 13px; color: #475569; margin-top: 4px; }
        .estado-badge { display: inline-block; margin-top: 8px; padding: 3px 12px; border-radius: 20px; font-size: 11px; font-weight: 700; background: #dcfce7; color: #16a34a; }
        hr { border: none; border-top: 2px solid #e2e8f0; margin: 24px 0; }
        table { width: 100%; border-collapse: collapse; }
        thead tr { background: #1b2a4a; color: #fff; }
        thead th { padding: 12px 14px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
        thead th:first-child { text-align: left; border-radius: 6px 0 0 6px; }
        thead th:last-child { border-radius: 0 6px 6px 0; text-align: right; }
        thead th:nth-child(2) { text-align: center; }
        thead th:nth-child(3), thead th:nth-child(4) { text-align: right; }
        tbody tr:last-child td { border-bottom: none; }
        .totales { margin-top: 28px; display: flex; justify-content: flex-end; }
        .totales-inner { min-width: 280px; }
        .linea-total { display: flex; justify-content: space-between; padding: 7px 0; font-size: 14px; }
        .linea-total.final { background: #1b2a4a; color: #fff; padding: 12px 16px; border-radius: 8px; margin-top: 8px; font-size: 18px; font-weight: 800; }
        .nota-iva { font-size: 11px; color: #94a3b8; text-align: right; margin-top: 6px; }
        .pie { margin-top: 48px; border-top: 1px solid #e2e8f0; padding-top: 16px; text-align: center; color: #94a3b8; font-size: 11px; line-height: 1.8; }
        @media print {
          body { padding: 20px; }
          button { display: none !important; }
        }
      </style>
    </head>
    <body>
      <div class="membrete">
        <div>
          <div class="academia-nombre">🎓 Academia <span>H&B</span></div>
          <div class="academia-sub">
            merch@academiahb.com<br/>
            Caracas, Venezuela<br/>
            RIF: J-1234567-8
          </div>
        </div>
        <div class="factura-id">
          <div class="label">Comprobante de Compra</div>
          <div class="ref">REF: ${e.nroReferenciaPago_ahbb??`—`}</div>
          <div class="fecha">${J(e.fechaFactura_ahbb)}</div>
          <div class="estado-badge">✔ Pagada</div>
        </div>
      </div>

      <hr />

      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th style="text-align: center;">Cant.</th>
            <th style="text-align: right;">P. Unitario</th>
            <th style="text-align: right;">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          ${n}
        </tbody>
      </table>

      <div class="totales">
        <div class="totales-inner">
          <div class="linea-total">
            <span style="color: #64748b;">Subtotal (sin IVA)</span>
            <span>$${t.subtotal.toFixed(2)}</span>
          </div>
          <div class="linea-total">
            <span style="color: #64748b;">IVA (${t.ivaPorcentaje}%)</span>
            <span>$${t.ivaMontoUSD.toFixed(2)}</span>
          </div>
          <div class="linea-total final">
            <span>TOTAL</span>
            <span>$${t.totalConIva.toFixed(2)}</span>
          </div>
          <div class="nota-iva">* IVA calculado según SENIAT (${t.ivaPorcentaje}%)</div>
        </div>
      </div>

      <div class="pie">
        Academia H&B &mdash; Tu academia de certificaciones de confianza.<br/>
        Este comprobante es válido como constancia de pago.
      </div>
    </body>
    </html>
  `,i=window.open(``,`_blank`,`width=900,height=700`);i&&(i.document.write(r),i.document.close(),i.focus(),i.onload=()=>{i.print()},setTimeout(()=>{try{i.print()}catch{}},500))};return u(async()=>{await R.cargarHistorial_ahbb(),z.value=!1}),(i,u)=>(t(),d(ae,{class:`q-pa-md`},{default:e(()=>[o(`div`,pe,[l(h,{flat:``,round:``,icon:`arrow_back`,color:`primary`,to:`/tienda`,class:`q-mr-sm`}),u[7]||=o(`div`,null,[o(`div`,{class:`text-h5 text-weight-bold`},`Mis Compras`),o(`div`,{class:`text-caption text-grey-6`},`Historial de tus transacciones`)],-1)]),l(_,{flat:``,bordered:``,class:`q-pa-md q-mb-lg`},{default:e(()=>[o(`div`,me,[o(`div`,he,[l(S,{modelValue:B.value,"onUpdate:modelValue":u[0]||=e=>B.value=e,outlined:``,dense:``,label:`Buscar por Nro. de Referencia`,clearable:``},{prepend:e(()=>[l(g,{name:`receipt`})]),_:1},8,[`modelValue`])]),o(`div`,ge,[u[8]||=o(`div`,{class:`text-caption text-grey-7 q-mb-xs`},`Filtrar por fecha:`,-1),l(de,{modelValue:V.value,"onUpdate:modelValue":u[1]||=e=>V.value=e,options:Ue,unelevated:``,rounded:``,"toggle-color":`primary`,color:`grey-2`,"text-color":`grey-8`,size:`sm`,class:`full-width`},null,8,[`modelValue`])]),o(`div`,w,[V.value===`anio`?(t(),d(le,{key:0,modelValue:H.value,"onUpdate:modelValue":u[2]||=e=>H.value=e,options:[2024,2025,2026,2027].map(String),outlined:``,dense:``,label:`Seleccionar Año`,clearable:``,"emit-value":``},{prepend:e(()=>[l(g,{name:`event_note`})]),_:1},8,[`modelValue`,`options`])):V.value===`mes`?(t(),d(S,{key:1,modelValue:U.value,"onUpdate:modelValue":u[3]||=e=>U.value=e,outlined:``,dense:``,label:`Seleccionar Mes`,type:`month`},{prepend:e(()=>[l(g,{name:`calendar_view_month`})]),_:1},8,[`modelValue`])):(t(),d(S,{key:2,modelValue:W.value,"onUpdate:modelValue":u[4]||=e=>W.value=e,outlined:``,dense:``,label:`Fecha Exacta`,type:`date`},{prepend:e(()=>[l(g,{name:`today`})]),_:1},8,[`modelValue`]))]),o(`div`,T,[l(h,{flat:``,round:``,color:`grey-7`,icon:`filter_list_off`,onClick:$,disable:!B.value&&!We.value},{default:e(()=>[l(x,null,{default:e(()=>[...u[9]||=[f(`Limpiar filtros`,-1)]]),_:1})]),_:1},8,[`disable`])])])]),_:1}),z.value?(t(),s(`div`,E,[l(ce,{color:`primary`,size:`40px`})])):Z.value.length>0?(t(),s(`div`,D,[o(`div`,O,[(t(!0),s(p,null,n(Z.value,r=>(t(),s(`div`,{class:`col-12`,key:r.id_factura_ahbb},[l(_,{bordered:``,flat:``,class:`compra-card`},{default:e(()=>[l(b,{class:`bg-grey-1 q-py-sm`},{default:e(()=>[o(`div`,k,[o(`div`,A,[l(g,{name:`receipt_long`,color:`primary`,size:`1.2rem`}),o(`div`,null,[u[10]||=o(`div`,{class:`text-caption text-grey-7 text-uppercase text-weight-bold`},`Fecha de Compra`,-1),o(`div`,j,a(J(r.fechaFactura_ahbb)),1)]),l(v,{vertical:``,class:`q-mx-sm`}),o(`div`,null,[u[11]||=o(`div`,{class:`text-caption text-grey-7 text-uppercase text-weight-bold`},`Ref. de Pago`,-1),o(`div`,M,a(r.nroReferenciaPago_ahbb||`—`),1)])]),o(`div`,N,[l(C,{color:Y(r.estadoFactura_ahbb),"text-color":`white`,size:`sm`,dense:``},{default:e(()=>[f(a(X(r.estadoFactura_ahbb)),1)]),_:2},1032,[`color`]),o(`div`,P,` $`+a(Q(r).totalConIva.toFixed(2)),1),l(h,{round:``,flat:``,dense:``,icon:`visibility`,color:`primary`,size:`sm`,onClick:e=>q(r),title:`Ver factura completa`},{default:e(()=>[l(x,null,{default:e(()=>[...u[12]||=[f(`Ver factura detallada`,-1)]]),_:1})]),_:1},8,[`onClick`])])])]),_:2},1024),l(v),l(b,{class:`q-py-sm`},{default:e(()=>[(t(!0),s(p,null,n(r.detalles_ahbb,n=>(t(),s(`div`,{class:`row items-center q-py-xs q-gutter-sm`,key:n.id_detalle_factura_ahbb},[l(y,{rounded:``,size:`40px`,class:`q-mr-sm`},{default:e(()=>[o(`img`,{src:n.producto_ahbb?.imagen_ahbb||`https://via.placeholder.com/80`,alt:n.producto_ahbb?.nombre_ahbb},null,8,F)]),_:2},1024),o(`div`,I,[o(`div`,L,a(n.producto_ahbb?.nombre_ahbb),1),o(`div`,_e,a(n.cantidad_ahbb)+` × $`+a(Number(n.precioUnitario_ahbb).toFixed(2)),1)]),o(`div`,ve,` $`+a((n.cantidad_ahbb*Number(n.precioUnitario_ahbb)).toFixed(2)),1)]))),128))]),_:2},1024)]),_:2},1024)]))),128))])])):(t(),s(`div`,ye,[l(g,{name:`receipt_long`,size:`64px`}),o(`div`,be,a(c(R).historialFacturas_ahbb.length===0?`Aún no has realizado ninguna compra`:`No se encontraron compras con esos filtros`),1),c(R).historialFacturas_ahbb.length===0?(t(),d(h,{key:0,unelevated:``,color:`primary`,label:`Visitar Tienda`,to:`/tienda`,class:`q-mt-md`})):(t(),d(h,{key:1,flat:``,color:`primary`,label:`Limpiar filtros`,icon:`filter_list_off`,onClick:$,class:`q-mt-md`}))])),l(te,{modelValue:K.value,"onUpdate:modelValue":u[6]||=e=>K.value=e,maximized:``,"transition-show":`slide-up`,"transition-hide":`slide-down`},{default:e(()=>[l(_,null,{default:e(()=>[l(ie,{class:`bg-primary text-white`},{default:e(()=>[r(l(h,{flat:``,round:``,dense:``,icon:`close`},null,512),[[re]]),l(ne,null,{default:e(()=>[...u[13]||=[f(`Factura Detallada`,-1)]]),_:1}),l(h,{flat:``,rounded:``,icon:`picture_as_pdf`,label:`Exportar PDF`,onClick:u[5]||=e=>Ge(G.value)})]),_:1}),l(b,{class:`flex flex-center bg-grey-3`,style:{"min-height":`calc(100vh - 56px)`}},{default:e(()=>[G.value?(t(),s(`div`,xe,[o(`div`,Se,[u[15]||=o(`div`,null,[o(`div`,{class:`text-h4 text-weight-bolder text-primary`,style:{"font-family":`'Outfit', sans-serif`}},[f(` 🎓 Academia `),o(`span`,{style:{color:`#f59e0b`}},`H&B`)]),o(`div`,{class:`text-caption text-grey-7 q-mt-xs`},`merch@academiahb.com`),o(`div`,{class:`text-caption text-grey-7`},`Caracas, Venezuela`),o(`div`,{class:`text-caption text-grey-7`},`RIF: J-1234567-8`)],-1),o(`div`,Ce,[u[14]||=o(`div`,{class:`text-overline text-grey-6 text-uppercase`},`Comprobante de Compra`,-1),o(`div`,we,` REF: `+a(G.value.nroReferenciaPago_ahbb),1),o(`div`,Te,a(J(G.value.fechaFactura_ahbb)),1),l(C,{color:Y(G.value.estadoFactura_ahbb),"text-color":`white`,size:`sm`,class:`q-mt-xs`},{default:e(()=>[f(a(X(G.value.estadoFactura_ahbb)),1)]),_:1},8,[`color`])])]),l(v,{class:`q-mb-lg`}),u[19]||=o(`div`,{class:`text-subtitle2 text-uppercase text-grey-7 q-mb-sm`},`Detalle de Productos`,-1),l(ue,{flat:``,bordered:``,separator:`cell`,class:`q-mb-lg`},{default:e(()=>[u[16]||=o(`thead`,null,[o(`tr`,{class:`bg-primary text-white`},[o(`th`,{class:`text-left`},`Producto`),o(`th`,{class:`text-center`},`Cant.`),o(`th`,{class:`text-right`},`P. Unitario`),o(`th`,{class:`text-right`},`Subtotal`)])],-1),o(`tbody`,null,[(t(!0),s(p,null,n(G.value.detalles_ahbb,n=>(t(),s(`tr`,{key:n.id_detalle_factura_ahbb},[o(`td`,null,[o(`div`,Ee,[l(y,{rounded:``,size:`36px`},{default:e(()=>[o(`img`,{src:n.producto_ahbb?.imagen_ahbb||`https://via.placeholder.com/80`},null,8,De)]),_:2},1024),o(`div`,null,[o(`div`,Oe,a(n.producto_ahbb?.nombre_ahbb),1),o(`div`,ke,a(n.producto_ahbb?.categoria_ahbb),1)])])]),o(`td`,Ae,a(n.cantidad_ahbb),1),o(`td`,je,`$`+a(Number(n.precioUnitario_ahbb).toFixed(2)),1),o(`td`,Me,`$`+a((n.cantidad_ahbb*Number(n.precioUnitario_ahbb)).toFixed(2)),1)]))),128))])]),_:1}),o(`div`,Ne,[o(`div`,Pe,[o(`div`,Fe,[u[17]||=o(`span`,{class:`text-grey-7`},`Subtotal (sin IVA)`,-1),o(`span`,Ie,`$`+a(Q(G.value).subtotal.toFixed(2)),1)]),o(`div`,Le,[o(`span`,Re,`IVA (`+a(Q(G.value).ivaPorcentaje)+`%)`,1),o(`span`,ze,`$`+a(Q(G.value).ivaMontoUSD.toFixed(2)),1)]),l(v,{class:`q-my-sm`}),o(`div`,Be,[u[18]||=o(`span`,{class:`text-weight-bold text-body1`},`TOTAL`,-1),o(`span`,Ve,`$`+a(Q(G.value).totalConIva.toFixed(2)),1)]),o(`div`,He,` * IVA calculado según SENIAT (`+a(Q(G.value).ivaPorcentaje)+`%) `,1)])]),l(v,{class:`q-mt-xl q-mb-md`}),u[20]||=o(`div`,{class:`text-center text-caption text-grey-6`},[f(` Academia H&B — Tu academia de certificaciones de confianza.`),o(`br`),f(` Este comprobante es válido como constancia de pago. `)],-1)])):ee(``,!0)]),_:1})]),_:1})]),_:1},8,[`modelValue`])]),_:1}))}},[[`__scopeId`,`data-v-179f4f3a`]]);export{R as default};