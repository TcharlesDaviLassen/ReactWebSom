const jsonData = [
    {
        "codigo": "1101",
        "nome": "Compra para industrialização"
    },
    {
        "codigo": "1101",
        "nome": "Compra para industrialização"
    },
    {
        "codigo": "1102",
        "nome": "Compra para comercialização"
    },
    {
        "codigo": "1111",
        "nome": "Compra para industrialização de mercadoria recebida anteriormente em consignação industrial"
    },
    {
        "codigo": "1113",
        "nome": "Compra para comercialização, de mercadoria recebida anteriormente em consignação mercantil"
    },
    {
        "codigo": "1116",
        "nome": "Compra para industrialização originada de encomenda para recebimento futuro"
    },
    {
        "codigo": "1117",
        "nome": "Compra para comercialização originada de encomenda para recebimento futuro"
    },
    {
        "codigo": "1118",
        "nome": "Compra de mercadoria para comercialização pelo adquirente originário, entregue pelo vendedor remetente ao destinatário, em venda à ordem"
    },
    {
        "codigo": "1120",
        "nome": "Compra para industrialização, em venda à ordem, já recebida do vendedor remetente"
    },
    {
        "codigo": "1121",
        "nome": "Compra para comercialização, em venda à ordem, já recebida do vendedor remetente"
    },
    {
        "codigo": "1122",
        "nome": "Compra para industrialização em que a mercadoria foi remetida pelo fornecedor ao industrializador sem transitar pelo estabelecimento adquirente"
    },
    {
        "codigo": "1124",
        "nome": "Industrialização efetuada por outra empresa"
    },
    {
        "codigo": "1125",
        "nome": "Industrialização efetuada por outra empresa quando a mercadoria remetida para utilização no processo de industrialização não transitou pelo estabelecimento adquirente da mercadoria"
    },
    {
        "codigo": "1126",
        "nome": "Compra para utilização na prestação de serviço"
    },
    {
        "codigo": "1151",
        "nome": "Transferência para industrialização"
    },
    {
        "codigo": "1152",
        "nome": "Transferência para comercialização"
    },
    {
        "codigo": "1153",
        "nome": "Transferência de energia elétrica para distribuição"
    },
    {
        "codigo": "1154",
        "nome": "Transferência para utilização na prestação de serviço"
    },
    {
        "codigo": "1159",
        "nome": "Entrada decorrente do fornecimento de produto ou mercadoria de ato cooperativo"
    },
    {
        "codigo": "1201",
        "nome": "Devolução de venda de produção do estabelecimento"
    },
    {
        "codigo": "1202",
        "nome": "Devolução de venda de mercadoria adquirida ou recebida de terceiros, ou qualquer devolução de mercadoria efetuada pelo MEI com exceção das classificadas nos códigos 1.503, 1.504, 1.505 e 1.506"
    },
    {
        "codigo": "1203",
        "nome": "Devolução de venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio"
    },
    {
        "codigo": "1204",
        "nome": "Devolução de venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio"
    },
    {
        "codigo": "1205",
        "nome": "Anulação de valor relativo à prestação de serviço de comunicação"
    },
    {
        "codigo": "1206",
        "nome": "Anulação de valor relativo à prestação de serviço de transporte"
    },
    {
        "codigo": "1207",
        "nome": "Anulação de valor relativo à venda de energia elétrica"
    },
    {
        "codigo": "1208",
        "nome": "Devolução de produção do estabelecimento, remetida em transferência"
    },
    {
        "codigo": "1209",
        "nome": "Devolução de mercadoria adquirida ou recebida de terceiros, remetida em transferência"
    },
    {
        "codigo": "1251",
        "nome": "Compra de energia elétrica para distribuição ou comercialização"
    },
    {
        "codigo": "1252",
        "nome": "Compra de energia elétrica por estabelecimento industrial"
    },
    {
        "codigo": "1253",
        "nome": "Compra de energia elétrica por estabelecimento comercial"
    },
    {
        "codigo": "1254",
        "nome": "Compra de energia elétrica por estabelecimento prestador de serviço de transporte"
    },
    {
        "codigo": "1255",
        "nome": "Compra de energia elétrica por estabelecimento prestador de serviço de comunicação"
    },
    {
        "codigo": "1256",
        "nome": "Compra de energia elétrica por estabelecimento de produtor rural"
    },
    {
        "codigo": "1257",
        "nome": "Compra de energia elétrica para consumo por demanda contratada"
    },
    {
        "codigo": "1301",
        "nome": "Aquisição de serviço de comunicação para execução de serviço da mesma natureza"
    },
    {
        "codigo": "1302",
        "nome": "Aquisição de serviço de comunicação por estabelecimento industrial"
    },
    {
        "codigo": "1303",
        "nome": "Aquisição de serviço de comunicação por estabelecimento comercial"
    },
    {
        "codigo": "1304",
        "nome": "Aquisição de serviço de comunicação por estabelecimento de prestador de serviço de transporte"
    },
    {
        "codigo": "1305",
        "nome": "Aquisição de serviço de comunicação por estabelecimento de geradora ou de distribuidora de energia elétrica"
    },
    {
        "codigo": "1306",
        "nome": "Aquisição de serviço de comunicação por estabelecimento de produtor rural"
    },
    {
        "codigo": "1351",
        "nome": "Aquisição de serviço de transporte para execução de serviço da mesma natureza"
    },
    {
        "codigo": "1352",
        "nome": "Aquisição de serviço de transporte por estabelecimento industrial"
    },
    {
        "codigo": "1353",
        "nome": "Aquisição de serviço de transporte por estabelecimento comercial"
    },
    {
        "codigo": "1354",
        "nome": "Aquisição de serviço de transporte por estabelecimento de prestador de serviço de comunicação"
    },
    {
        "codigo": "1355",
        "nome": "Aquisição de serviço de transporte por estabelecimento de geradora ou de distribuidora de energia elétrica"
    },
    {
        "codigo": "1356",
        "nome": "Aquisição de serviço de transporte por estabelecimento de produtor rural"
    },
    {
        "codigo": "1360",
        "nome": "Aquisição de serviço de transporte por contribuinte substituto em relação ao serviço de transporte."
    },
    {
        "codigo": "1401",
        "nome": "Compra para industrialização em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "1403",
        "nome": "Compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "1406",
        "nome": "Compra de bem para o ativo imobilizado cuja mercadoria está sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "1407",
        "nome": "Compra de mercadoria para uso ou consumo cuja mercadoria está sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "1408",
        "nome": "Transferência para industrialização em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "1409",
        "nome": "Transferência para comercialização em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "1410",
        "nome": "Devolução de venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária"
    },
    {
        "codigo": "1411",
        "nome": "Devolução de venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "1414",
        "nome": "Retorno de produção do estabelecimento, remetida para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária"
    },
    {
        "codigo": "1415",
        "nome": "Retorno de mercadoria adquirida ou recebida de terceiros, remetida para venda fora do estabelecimento em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "1451",
        "nome": "Entrada de animal - Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "1452",
        "nome": "Entrada de insumo - Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "1453",
        "nome": "Retorno do animal ou da produção - Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "1454",
        "nome": "Retorno simbólico do animal ou da produção - Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "1455",
        "nome": "Retorno de insumo não utilizado na produção - Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "1456",
        "nome": "Entrada referente a remuneração do produtor no Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "1501",
        "nome": "Entrada de mercadoria recebida com fim específico de exportação"
    },
    {
        "codigo": "1503",
        "nome": "Entrada decorrente de devolução de produto remetido com fim específico de exportação, de produção do estabelecimento"
    },
    {
        "codigo": "1504",
        "nome": "Entrada decorrente de devolução de mercadoria remetida com fim específico de exportação, adquirida ou recebida de terceiros"
    },
    {
        "codigo": "1505",
        "nome": "Entrada decorrente de devolução de mercadorias remetidas para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento."
    },
    {
        "codigo": "1506",
        "nome": "Entrada decorrente de devolução de mercadorias, adquiridas ou recebidas de terceiros, remetidas para formação de lote de exportação"
    },
    {
        "codigo": "1551",
        "nome": "Compra de bem para o ativo imobilizado"
    },
    {
        "codigo": "1552",
        "nome": "Transferência de bem do ativo imobilizado"
    },
    {
        "codigo": "1553",
        "nome": "Devolução de venda de bem do ativo imobilizado"
    },
    {
        "codigo": "1554",
        "nome": "Retorno de bem do ativo imobilizado remetido para uso fora do estabelecimento"
    },
    {
        "codigo": "1555",
        "nome": "Entrada de bem do ativo imobilizado de terceiro, remetido para uso no estabelecimento"
    },
    {
        "codigo": "1556",
        "nome": "Compra de material para uso ou consumo"
    },
    {
        "codigo": "1557",
        "nome": "Transferência de material para uso ou consumo"
    },
    {
        "codigo": "1601",
        "nome": "Recebimento, por transferência, de crédito de ICMS"
    },
    {
        "codigo": "1602",
        "nome": "Recebimento, por transferência, de saldo credor de ICMS de outro estabelecimento da mesma empresa, para compensação de saldo devedor de ICMS"
    },
    {
        "codigo": "1603",
        "nome": "Ressarcimento de ICMS retido por substituição tributária"
    },
    {
        "codigo": "1604",
        "nome": "Lançamento do crédito relativo à compra de bem para o ativo imobilizado"
    },
    {
        "codigo": "1605",
        "nome": "Recebimento, por transferência, de saldo devedor de ICMS de outro estabelecimento da mesma empresa."
    },
    {
        "codigo": "1651",
        "nome": "Compra de combustível ou lubrificante para industrialização subseqüente"
    },
    {
        "codigo": "1652",
        "nome": "Compra de combustível ou lubrificante para comercialização"
    },
    {
        "codigo": "1653",
        "nome": "Compra de combustível ou lubrificante por consumidor ou usuário final"
    },
    {
        "codigo": "1657",
        "nome": "Retorno de remessa de combustível ou lubrificante para venda fora do estabelecimento"
    },
    {
        "codigo": "1658",
        "nome": "Transferência de combustível e lubrificante para industrialização"
    },
    {
        "codigo": "1659",
        "nome": "Transferência de combustível e lubrificante para comercialização"
    },
    {
        "codigo": "1660",
        "nome": "Devolução de venda de combustível ou lubrificante destinado à industrialização subseqüente"
    },
    {
        "codigo": "1661",
        "nome": "Devolução de venda de combustível ou lubrificante destinado à comercialização"
    },
    {
        "codigo": "1662",
        "nome": "Devolução de venda de combustível ou lubrificante destinado a consumidor ou usuário final"
    },
    {
        "codigo": "1663",
        "nome": "Entrada de combustível ou lubrificante para armazenagem"
    },
    {
        "codigo": "1664",
        "nome": "Retorno de combustível ou lubrificante remetido para armazenagem"
    },
    {
        "codigo": "1901",
        "nome": "Entrada para industrialização por encomenda"
    },
    {
        "codigo": "1902",
        "nome": "Retorno de mercadoria remetida para industrialização por encomenda"
    },
    {
        "codigo": "1903",
        "nome": "Entrada de mercadoria remetida para industrialização e não aplicada no referido processo"
    },
    {
        "codigo": "1904",
        "nome": "Retorno de remessa para venda fora do estabelecimento, ou qualquer entrada e retorno de remessa efetuada pelo MEI com exceção dos classificados nos códigos 1.202, 1.503, 1.504, 1.505 e 1.506"
    },
    {
        "codigo": "1905",
        "nome": "Entrada de mercadoria recebida para depósito em depósito fechado ou armazém geral"
    },
    {
        "codigo": "1906",
        "nome": "Retorno de mercadoria remetida para depósito fechado ou armazém geral"
    },
    {
        "codigo": "1907",
        "nome": "Retorno simbólico de mercadoria remetida para depósito fechado ou armazém geral"
    },
    {
        "codigo": "1908",
        "nome": "Entrada de bem por conta de contrato de comodato ou locação"
    },
    {
        "codigo": "1909",
        "nome": "Retorno de bem remetido por conta de contrato de comodato ou locação"
    },
    {
        "codigo": "1910",
        "nome": "Entrada de bonificação, doação ou brinde"
    },
    {
        "codigo": "1911",
        "nome": "Entrada de amostra grátis"
    },
    {
        "codigo": "1912",
        "nome": "Entrada de mercadoria ou bem recebido para demonstração"
    },
    {
        "codigo": "1913",
        "nome": "Retorno de mercadoria ou bem remetido para demonstração"
    },
    {
        "codigo": "1914",
        "nome": "Retorno de mercadoria ou bem remetido para exposição ou feira"
    },
    {
        "codigo": "1915",
        "nome": "Entrada de mercadoria ou bem recebido para conserto ou reparo"
    },
    {
        "codigo": "1916",
        "nome": "Retorno de mercadoria ou bem remetido para conserto ou reparo"
    },
    {
        "codigo": "1917",
        "nome": "Entrada de mercadoria recebida em consignação mercantil ou industrial"
    },
    {
        "codigo": "1918",
        "nome": "Devolução de mercadoria remetida em consignação mercantil ou industrial"
    },
    {
        "codigo": "1919",
        "nome": "Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, remetida anteriormente em consignação mercantil ou industrial"
    },
    {
        "codigo": "1920",
        "nome": "Entrada de vasilhame ou sacaria"
    },
    {
        "codigo": "1921",
        "nome": "Retorno de vasilhame ou sacaria"
    },
    {
        "codigo": "1922",
        "nome": "Lançamento efetuado a título de simples faturamento decorrente de compra para recebimento futuro"
    },
    {
        "codigo": "1923",
        "nome": "Entrada de mercadoria recebida do vendedor remetente, em venda à ordem"
    },
    {
        "codigo": "1924",
        "nome": "Entrada para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente"
    },
    {
        "codigo": "1925",
        "nome": "Retorno de mercadoria remetida para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente"
    },
    {
        "codigo": "1926",
        "nome": "Lançamento efetuado a título de reclassificação de mercadoria decorrente de formação de kit ou de sua desagregação"
    },
    {
        "codigo": "1931",
        "nome": "Lançamento efetuado pelo tomador do serviço de transporte quando a responsabilidade de retenção do imposto for atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço. (Ajuste SINIEF 03/04)"
    },
    {
        "codigo": "1932",
        "nome": "Aquisição de serviço de transporte iniciado em unidade da Federação diversa daquela onde inscrito o prestador. (ajuste sinief 03/04)"
    },
    {
        "codigo": "1933",
        "nome": "Aquisição de serviço tributado pelo ISSQN.(ajuste sinief 03/04)"
    },
    {
        "codigo": "1949",
        "nome": "Outra entrada de mercadoria ou prestação de serviço não especificada"
    },
    {
        "codigo": "2101",
        "nome": "Compra para industrialização"
    },
    {
        "codigo": "2102",
        "nome": "Compra para comercialização"
    },
    {
        "codigo": "2111",
        "nome": "Compra para industrialização de mercadoria recebida anteriormente em consignação industrial"
    },
    {
        "codigo": "2113",
        "nome": "Compra para comercialização, de mercadoria recebida anteriormente em consignação mercantil"
    },
    {
        "codigo": "2116",
        "nome": "Compra para industrialização originada de encomenda para recebimento futuro"
    },
    {
        "codigo": "2117",
        "nome": "Compra para comercialização originada de encomenda para recebimento futuro"
    },
    {
        "codigo": "2118",
        "nome": "Compra de mercadoria para comercialização pelo adquirente originário, entregue pelo vendedor remetente ao destinatário, em venda à ordem"
    },
    {
        "codigo": "2120",
        "nome": "Compra para industrialização, em venda à ordem, já recebida do vendedor remetente"
    },
    {
        "codigo": "2121",
        "nome": "Compra para comercialização, em venda à ordem, já recebida do vendedor remetente"
    },
    {
        "codigo": "2122",
        "nome": "Compra para industrialização em que a mercadoria foi remetida pelo fornecedor ao industrializador sem transitar pelo estabelecimento adquirente"
    },
    {
        "codigo": "2124",
        "nome": "Industrialização efetuada por outra empresa"
    },
    {
        "codigo": "2125",
        "nome": "Industrialização efetuada por outra empresa quando a mercadoria remetida para utilização no processo de industrialização não transitou pelo estabelecimento adquirente da mercadoria"
    },
    {
        "codigo": "2126",
        "nome": "Compra para utilização na prestação de serviço"
    },
    {
        "codigo": "2151",
        "nome": "Transferência para industrialização"
    },
    {
        "codigo": "2152",
        "nome": "Transferência para comercialização"
    },
    {
        "codigo": "2153",
        "nome": "Transferência de energia elétrica para distribuição"
    },
    {
        "codigo": "2154",
        "nome": "Transferência para utilização na prestação de serviço"
    },
    {
        "codigo": "2159",
        "nome": "Entrada decorrente do fornecimento de produto ou mercadoria de ato cooperativo"
    },
    {
        "codigo": "2201",
        "nome": "Devolução de venda de produção do estabelecimento"
    },
    {
        "codigo": "2202",
        "nome": "Devolução de venda de mercadoria adquirida ou recebida de terceiros, ou qualquer devolução de mercadoria efetuada pelo MEI com exceção das classificadas nos códigos 2.503, 2.504, 2.505 e 2.506"
    },
    {
        "codigo": "2203",
        "nome": "Devolução de venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio"
    },
    {
        "codigo": "2204",
        "nome": "Devolução de venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio"
    },
    {
        "codigo": "2205",
        "nome": "Anulação de valor relativo à prestação de serviço de comunicação"
    },
    {
        "codigo": "2206",
        "nome": "Anulação de valor relativo à prestação de serviço de transporte"
    },
    {
        "codigo": "2207",
        "nome": "Anulação de valor relativo à venda de energia elétrica"
    },
    {
        "codigo": "2208",
        "nome": "Devolução de produção do estabelecimento, remetida em transferência"
    },
    {
        "codigo": "2209",
        "nome": "Devolução de mercadoria adquirida ou recebida de terceiros, remetida em transferência"
    },
    {
        "codigo": "2251",
        "nome": "Compra de energia elétrica para distribuição ou comercialização"
    },
    {
        "codigo": "2252",
        "nome": "Compra de energia elétrica por estabelecimento industrial"
    },
    {
        "codigo": "2253",
        "nome": "Compra de energia elétrica por estabelecimento comercial"
    },
    {
        "codigo": "2254",
        "nome": "Compra de energia elétrica por estabelecimento prestador de serviço de transporte"
    },
    {
        "codigo": "2255",
        "nome": "Compra de energia elétrica por estabelecimento prestador de serviço de comunicação"
    },
    {
        "codigo": "2256",
        "nome": "Compra de energia elétrica por estabelecimento de produtor rural"
    },
    {
        "codigo": "2257",
        "nome": "Compra de energia elétrica para consumo por demanda contratada"
    },
    {
        "codigo": "2301",
        "nome": "Aquisição de serviço de comunicação para execução de serviço da mesma natureza"
    },
    {
        "codigo": "2302",
        "nome": "Aquisição de serviço de comunicação por estabelecimento industrial"
    },
    {
        "codigo": "2303",
        "nome": "Aquisição de serviço de comunicação por estabelecimento comercial"
    },
    {
        "codigo": "2304",
        "nome": "Aquisição de serviço de comunicação por estabelecimento de prestador de serviço de transporte"
    },
    {
        "codigo": "2305",
        "nome": "Aquisição de serviço de comunicação por estabelecimento de geradora ou de distribuidora de energia elétrica"
    },
    {
        "codigo": "2306",
        "nome": "Aquisição de serviço de comunicação por estabelecimento de produtor rural"
    },
    {
        "codigo": "2351",
        "nome": "Aquisição de serviço de transporte para execução de serviço da mesma natureza"
    },
    {
        "codigo": "2352",
        "nome": "Aquisição de serviço de transporte por estabelecimento industrial"
    },
    {
        "codigo": "2353",
        "nome": "Aquisição de serviço de transporte por estabelecimento comercial"
    },
    {
        "codigo": "2354",
        "nome": "Aquisição de serviço de transporte por estabelecimento de prestador de serviço de comunicação"
    },
    {
        "codigo": "2355",
        "nome": "Aquisição de serviço de transporte por estabelecimento de geradora ou de distribuidora de energia elétrica"
    },
    {
        "codigo": "2356",
        "nome": "Aquisição de serviço de transporte por estabelecimento de produtor rural"
    },
    {
        "codigo": "2401",
        "nome": "Compra para industrialização em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "2403",
        "nome": "Compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "2406",
        "nome": "Compra de bem para o ativo imobilizado cuja mercadoria está sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "2407",
        "nome": "Compra de mercadoria para uso ou consumo cuja mercadoria está sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "2408",
        "nome": "Transferência para industrialização em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "2409",
        "nome": "Transferência para comercialização em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "2410",
        "nome": "Devolução de venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária"
    },
    {
        "codigo": "2411",
        "nome": "Devolução de venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "2414",
        "nome": "Retorno de produção do estabelecimento, remetida para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária"
    },
    {
        "codigo": "2415",
        "nome": "Retorno de mercadoria adquirida ou recebida de terceiros, remetida para venda fora do estabelecimento em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "2451",
        "nome": "Entrada de animal - Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "2452",
        "nome": "Entrada de insumo - Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "2453",
        "nome": "Retorno do animal ou da produção - Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "2454",
        "nome": "Retorno simbólico do animal ou da produção - Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "2455",
        "nome": "Retorno de insumo não utilizado na produção - Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "2456",
        "nome": "Entrada referente a remuneração do produtor no Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "2501",
        "nome": "Entrada de mercadoria recebida com fim específico de exportação"
    },
    {
        "codigo": "2503",
        "nome": "Entrada decorrente de devolução de produto remetido com fim específico de exportação, de produção do estabelecimento"
    },
    {
        "codigo": "2504",
        "nome": "Entrada decorrente de devolução de mercadoria remetida com fim específico de exportação, adquirida ou recebida de terceiros"
    },
    {
        "codigo": "2505",
        "nome": "Entrada decorrente de devolução de mercadorias remetidas para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento"
    },
    {
        "codigo": "2506",
        "nome": "Entrada decorrente de devolução de mercadorias, adquiridas ou recebidas de terceiros, remetidas para formação de lote de exportação"
    },
    {
        "codigo": "2551",
        "nome": "Compra de bem para o ativo imobilizado"
    },
    {
        "codigo": "2552",
        "nome": "Transferência de bem do ativo imobilizado"
    },
    {
        "codigo": "2553",
        "nome": "Devolução de venda de bem do ativo imobilizado"
    },
    {
        "codigo": "2554",
        "nome": "Retorno de bem do ativo imobilizado remetido para uso fora do estabelecimento"
    },
    {
        "codigo": "2555",
        "nome": "Entrada de bem do ativo imobilizado de terceiro, remetido para uso no estabelecimento"
    },
    {
        "codigo": "2556",
        "nome": "Compra de material para uso ou consumo"
    },
    {
        "codigo": "2557",
        "nome": "Transferência de material para uso ou consumo"
    },
    {
        "codigo": "2603",
        "nome": "Ressarcimento de ICMS retido por substituição tributária"
    },
    {
        "codigo": "2651",
        "nome": "Compra de combustível ou lubrificante para industrialização subseqüente"
    },
    {
        "codigo": "2652",
        "nome": "Compra de combustível ou lubrificante para comercialização"
    },
    {
        "codigo": "2653",
        "nome": "Compra de combustível ou lubrificante por consumidor ou usuário final"
    },
    {
        "codigo": "2657",
        "nome": "Retorno de remessa de combustível ou lubrificante para venda fora do estabelecimento"
    },
    {
        "codigo": "2658",
        "nome": "Transferência de combustível e lubrificante para industrialização"
    },
    {
        "codigo": "2659",
        "nome": "Transferência de combustível e lubrificante para comercialização"
    },
    {
        "codigo": "2660",
        "nome": "Devolução de venda de combustível ou lubrificante destinado à industrialização subseqüente"
    },
    {
        "codigo": "2661",
        "nome": "Devolução de venda de combustível ou lubrificante destinado à comercialização"
    },
    {
        "codigo": "2662",
        "nome": "Devolução de venda de combustível ou lubrificante destinado a consumidor ou usuário final"
    },
    {
        "codigo": "2663",
        "nome": "Entrada de combustível ou lubrificante para armazenagem"
    },
    {
        "codigo": "2664",
        "nome": "Retorno de combustível ou lubrificante remetido para armazenagem"
    },
    {
        "codigo": "2901",
        "nome": "Entrada para industrialização por encomenda"
    },
    {
        "codigo": "2902",
        "nome": "Retorno de mercadoria remetida para industrialização por encomenda"
    },
    {
        "codigo": "2903",
        "nome": "Entrada de mercadoria remetida para industrialização e não aplicada no referido processo"
    },
    {
        "codigo": "2904",
        "nome": "Retorno de remessa para venda fora do estabelecimento, ou qualquer entrada e retorno de remessa efetuada pelo MEI com exceção dos classificados nos códigos 2.202, 2.503, 2.504, 2.505 e 2.506"
    },
    {
        "codigo": "2905",
        "nome": "Entrada de mercadoria recebida para depósito em depósito fechado ou armazém geral"
    },
    {
        "codigo": "2906",
        "nome": "Retorno de mercadoria remetida para depósito fechado ou armazém geral"
    },
    {
        "codigo": "2907",
        "nome": "Retorno simbólico de mercadoria remetida para depósito fechado ou armazém geral"
    },
    {
        "codigo": "2908",
        "nome": "Entrada de bem por conta de contrato de comodato ou locação"
    },
    {
        "codigo": "2909",
        "nome": "Retorno de bem remetido por conta de contrato de comodato ou locação"
    },
    {
        "codigo": "2910",
        "nome": "Entrada de bonificação, doação ou brinde"
    },
    {
        "codigo": "2911",
        "nome": "Entrada de amostra grátis"
    },
    {
        "codigo": "2912",
        "nome": "Entrada de mercadoria ou bem recebido para demonstração"
    },
    {
        "codigo": "2913",
        "nome": "Retorno de mercadoria ou bem remetido para demonstração"
    },
    {
        "codigo": "2914",
        "nome": "Retorno de mercadoria ou bem remetido para exposição ou feira"
    },
    {
        "codigo": "2915",
        "nome": "Entrada de mercadoria ou bem recebido para conserto ou reparo"
    },
    {
        "codigo": "2916",
        "nome": "Retorno de mercadoria ou bem remetido para conserto ou reparo"
    },
    {
        "codigo": "2917",
        "nome": "Entrada de mercadoria recebida em consignação mercantil ou industrial"
    },
    {
        "codigo": "2918",
        "nome": "Devolução de mercadoria remetida em consignação mercantil ou industrial"
    },
    {
        "codigo": "2919",
        "nome": "Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, remetida anteriormente em consignação mercantil ou industrial"
    },
    {
        "codigo": "2920",
        "nome": "Entrada de vasilhame ou sacaria"
    },
    {
        "codigo": "2921",
        "nome": "Retorno de vasilhame ou sacaria"
    },
    {
        "codigo": "2922",
        "nome": "Lançamento efetuado a título de simples faturamento decorrente de compra para recebimento futuro"
    },
    {
        "codigo": "2923",
        "nome": "Entrada de mercadoria recebida do vendedor remetente, em venda à ordem"
    },
    {
        "codigo": "2924",
        "nome": "Entrada para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente"
    },
    {
        "codigo": "2925",
        "nome": "Retorno de mercadoria remetida para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente"
    },
    {
        "codigo": "2931",
        "nome": "Lançamento efetuado pelo tomador do serviço de transporte quando a responsabilidade de retenção do imposto for atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço. (ajuste sinief 03/04)"
    },
    {
        "codigo": "2932",
        "nome": "Aquisição de serviço de transporte iniciado em unidade da Federação diversa daquela onde inscrito o prestador. (ajuste sinief 03/04)"
    },
    {
        "codigo": "2933",
        "nome": "Aquisição de serviço tributado pelo ISSQN. (ajuste sinief 03/04)"
    },
    {
        "codigo": "2949",
        "nome": "Outra entrada de mercadoria ou prestação de serviço não especificado"
    },
    {
        "codigo": "3101",
        "nome": "Compra para industrialização"
    },
    {
        "codigo": "3102",
        "nome": "Compra para comercialização"
    },
    {
        "codigo": "3126",
        "nome": "Compra para utilização na prestação de serviço"
    },
    {
        "codigo": "3127",
        "nome": "Compra para industrialização sob o regime de drawback"
    },
    {
        "codigo": "3201",
        "nome": "Devolução de venda de produção do estabelecimento"
    },
    {
        "codigo": "3202",
        "nome": "Devolução de venda de mercadoria adquirida ou recebida de terceiros"
    },
    {
        "codigo": "3205",
        "nome": "Anulação de valor relativo à prestação de serviço de comunicação"
    },
    {
        "codigo": "3206",
        "nome": "Anulação de valor relativo à prestação de serviço de transporte"
    },
    {
        "codigo": "3207",
        "nome": "Anulação de valor relativo à venda de energia elétrica"
    },
    {
        "codigo": "3211",
        "nome": "Devolução de venda de produção do estabelecimento sob o regime de drawback"
    },
    {
        "codigo": "3251",
        "nome": "Compra de energia elétrica para distribuição ou comercialização"
    },
    {
        "codigo": "3301",
        "nome": "Aquisição de serviço de comunicação para execução de serviço da mesma natureza"
    },
    {
        "codigo": "3351",
        "nome": "Aquisição de serviço de transporte para execução de serviço da mesma natureza"
    },
    {
        "codigo": "3352",
        "nome": "Aquisição de serviço de transporte por estabelecimento industrial"
    },
    {
        "codigo": "3353",
        "nome": "Aquisição de serviço de transporte por estabelecimento comercial"
    },
    {
        "codigo": "3354",
        "nome": "Aquisição de serviço de transporte por estabelecimento de prestador de serviço de comunicação"
    },
    {
        "codigo": "3355",
        "nome": "Aquisição de serviço de transporte por estabelecimento de geradora ou de distribuidora de energia elétrica"
    },
    {
        "codigo": "3356",
        "nome": "Aquisição de serviço de transporte por estabelecimento de produtor rural"
    },
    {
        "codigo": "3503",
        "nome": "Devolução de mercadoria exportada que tenha sido recebida com fim específico de exportação"
    },
    {
        "codigo": "3551",
        "nome": "Compra de bem para o ativo imobilizado"
    },
    {
        "codigo": "3553",
        "nome": "Devolução de venda de bem do ativo imobilizado"
    },
    {
        "codigo": "3556",
        "nome": "Compra de material para uso ou consumo"
    },
    {
        "codigo": "3651",
        "nome": "Compra de combustível ou lubrificante para industrialização subseqüente"
    },
    {
        "codigo": "3652",
        "nome": "Compra de combustível ou lubrificante para comercialização"
    },
    {
        "codigo": "3653",
        "nome": "Compra de combustível ou lubrificante por consumidor ou usuário final"
    },
    {
        "codigo": "3930",
        "nome": "Lançamento efetuado a título de entrada de bem sob amparo de regime especial aduaneiro de admissão temporária"
    },
    {
        "codigo": "3949",
        "nome": "Outra entrada de mercadoria ou prestação de serviço não especificado"
    },
    {
        "codigo": "5101",
        "nome": "Venda de produção do estabelecimento"
    },
    {
        "codigo": "5102",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros, ou qualquer venda de mercadoria efetuada pelo MEI com exceção das saídas classificadas nos códigos 5.501, 5.502, 5.504 e 5.505"
    },
    {
        "codigo": "5103",
        "nome": "Venda de produção do estabelecimento, efetuada fora do estabelecimento"
    },
    {
        "codigo": "5104",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros, efetuada fora do estabelecimento"
    },
    {
        "codigo": "5105",
        "nome": "Venda de produção do estabelecimento que não deva por ele transitar"
    },
    {
        "codigo": "5106",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar"
    },
    {
        "codigo": "5109",
        "nome": "Venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio"
    },
    {
        "codigo": "5110",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio"
    },
    {
        "codigo": "5111",
        "nome": "Venda de produção do estabelecimento remetida anteriormente em consignação industrial"
    },
    {
        "codigo": "5112",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros remetida anteriormente em consignação industrial"
    },
    {
        "codigo": "5113",
        "nome": "Venda de produção do estabelecimento remetida anteriormente em consignação mercantil"
    },
    {
        "codigo": "5114",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros remetida anteriormente em consignação mercantil"
    },
    {
        "codigo": "5115",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros, recebida anteriormente em consignação mercantil"
    },
    {
        "codigo": "5116",
        "nome": "Venda de produção do estabelecimento originada de encomenda para entrega futura"
    },
    {
        "codigo": "5117",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros, originada de encomenda para entrega futura"
    },
    {
        "codigo": "5118",
        "nome": "Venda de produção do estabelecimento entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem"
    },
    {
        "codigo": "5119",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem"
    },
    {
        "codigo": "5120",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário pelo vendedor remetente, em venda à ordem"
    },
    {
        "codigo": "5122",
        "nome": "Venda de produção do estabelecimento remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente"
    },
    {
        "codigo": "5123",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente"
    },
    {
        "codigo": "5124",
        "nome": "Industrialização efetuada para outra empresa"
    },
    {
        "codigo": "5125",
        "nome": "Industrialização efetuada para outra empresa quando a mercadoria recebida para utilização no processo de industrialização não transitar pelo estabelecimento adquirente da mercadoria"
    },
    {
        "codigo": "5151",
        "nome": "Transferência de produção do estabelecimento"
    },
    {
        "codigo": "5152",
        "nome": "Transferência de mercadoria adquirida ou recebida de terceiros"
    },
    {
        "codigo": "5153",
        "nome": "Transferência de energia elétrica"
    },
    {
        "codigo": "5155",
        "nome": "Transferência de produção do estabelecimento, que não deva por ele transitar"
    },
    {
        "codigo": "5156",
        "nome": "Transferência de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar"
    },
    {
        "codigo": "5159",
        "nome": "Fornecimento de produção do estabelecimento de ato cooperativo"
    },
    {
        "codigo": "5160",
        "nome": "Fornecimento de mercadoria adquirida ou recebida de terceiros de ato cooperativo"
    },
    {
        "codigo": "5201",
        "nome": "Devolução de compra para industrialização"
    },
    {
        "codigo": "5202",
        "nome": "Devolução de compra para comercialização, ou qualquer devolução de mercadorias efetuada pelo MEI com exceção das classificadas no código 5.503"
    },
    {
        "codigo": "5205",
        "nome": "Anulação de valor relativo a aquisição de serviço de comunicação"
    },
    {
        "codigo": "5206",
        "nome": "Anulação de valor relativo a aquisição de serviço de transporte"
    },
    {
        "codigo": "5207",
        "nome": "Anulação de valor relativo à compra de energia elétrica"
    },
    {
        "codigo": "5208",
        "nome": "Devolução de mercadoria recebida em transferência para industrialização"
    },
    {
        "codigo": "5209",
        "nome": "Devolução de mercadoria recebida em transferência para comercialização"
    },
    {
        "codigo": "5210",
        "nome": "Devolução de compra para utilização na prestação de serviço"
    },
    {
        "codigo": "5251",
        "nome": "Venda de energia elétrica para distribuição ou comercialização"
    },
    {
        "codigo": "5252",
        "nome": "Venda de energia elétrica para estabelecimento industrial"
    },
    {
        "codigo": "5253",
        "nome": "Venda de energia elétrica para estabelecimento comercial"
    },
    {
        "codigo": "5254",
        "nome": "Venda de energia elétrica para estabelecimento prestador de serviço de transporte"
    },
    {
        "codigo": "5255",
        "nome": "Venda de energia elétrica para estabelecimento prestador de serviço de comunicação"
    },
    {
        "codigo": "5256",
        "nome": "Venda de energia elétrica para estabelecimento de produtor rural"
    },
    {
        "codigo": "5257",
        "nome": "Venda de energia elétrica para consumo por demanda contratada"
    },
    {
        "codigo": "5258",
        "nome": "Venda de energia elétrica a não contribuinte"
    },
    {
        "codigo": "5301",
        "nome": "Prestação de serviço de comunicação para execução de serviço da mesma natureza"
    },
    {
        "codigo": "5302",
        "nome": "Prestação de serviço de comunicação a estabelecimento industrial"
    },
    {
        "codigo": "5303",
        "nome": "Prestação de serviço de comunicação a estabelecimento comercial"
    },
    {
        "codigo": "5304",
        "nome": "Prestação de serviço de comunicação a estabelecimento de prestador de serviço de transporte"
    },
    {
        "codigo": "5305",
        "nome": "Prestação de serviço de comunicação a estabelecimento de geradora ou de distribuidora de energia elétrica"
    },
    {
        "codigo": "5306",
        "nome": "Prestação de serviço de comunicação a estabelecimento de produtor rural"
    },
    {
        "codigo": "5307",
        "nome": "Prestação de serviço de comunicação a não contribuinte"
    },
    {
        "codigo": "5351",
        "nome": "Prestação de serviço de transporte para execução de serviço da mesma natureza"
    },
    {
        "codigo": "5352",
        "nome": "Prestação de serviço de transporte a estabelecimento industrial"
    },
    {
        "codigo": "5353",
        "nome": "Prestação de serviço de transporte a estabelecimento comercial"
    },
    {
        "codigo": "5354",
        "nome": "Prestação de serviço de transporte a estabelecimento de prestador de serviço de comunicação"
    },
    {
        "codigo": "5355",
        "nome": "Prestação de serviço de transporte a estabelecimento de geradora ou de distribuidora de energia elétrica"
    },
    {
        "codigo": "5356",
        "nome": "Prestação de serviço de transporte a estabelecimento de produtor rural"
    },
    {
        "codigo": "5357",
        "nome": "Prestação de serviço de transporte a não contribuinte"
    },
    {
        "codigo": "5359",
        "nome": "Prestação de serviço de transporte a contribuinte ou a não contribuinte quando a mercadoria transportada está dispensada de emissão de nota fiscal. (ajuste sinief 03/04)"
    },
    {
        "codigo": "5360",
        "nome": "Prestação de serviço de transporte a contribuinte substituto em relação ao serviço de transporte."
    },
    {
        "codigo": "5401",
        "nome": "Venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária, na condição de contribuinte substituto"
    },
    {
        "codigo": "5402",
        "nome": "Venda de produção do estabelecimento de produto sujeito ao regime de substituição tributária, em operação entre contribuintes substitutos do mesmo produto"
    },
    {
        "codigo": "5403",
        "nome": "Venda de mercadoria, adquirida ou recebida de terceiros, sujeita ao regime de substituição tributária, na condição de contribuinte-substituto"
    },
    {
        "codigo": "5405",
        "nome": "Venda de mercadoria, adquirida ou recebida de terceiros, sujeita ao regime de substituição tributária, na condição de contribuinte-substituído"
    },
    {
        "codigo": "5408",
        "nome": "Transferência de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária"
    },
    {
        "codigo": "5409",
        "nome": "Transferência de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "5410",
        "nome": "Devolução de compra para industrialização em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "5411",
        "nome": "Devolução de compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "5412",
        "nome": "Devolução de bem do ativo imobilizado, em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "5413",
        "nome": "Devolução de mercadoria destinada ao uso ou consumo, em operação com mercadoria sujeita ao regime de substituição tributária."
    },
    {
        "codigo": "5414",
        "nome": "Remessa de produção do estabelecimento para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária"
    },
    {
        "codigo": "5415",
        "nome": "Remessa de mercadoria adquirida ou recebida de terceiros para venda fora do estabelecimento, em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "5451",
        "nome": "Remessa de animal - Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "5452",
        "nome": "Remessa de insumo - Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "5453",
        "nome": "Retorno de animal ou da produção - Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "5454",
        "nome": "Retorno simbólico de animal ou da produção - Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "5455",
        "nome": "Retorno de insumos não utilizados na produção - Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "5456",
        "nome": "Saída referente a remuneração do produtor - Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "5501",
        "nome": "Remessa de produção do estabelecimento, com fim específico de exportação"
    },
    {
        "codigo": "5502",
        "nome": "Remessa de mercadoria adquirida ou recebida de terceiros, com fim específico de exportação"
    },
    {
        "codigo": "5503",
        "nome": "Devolução de mercadoria recebida com fim específico de exportação"
    },
    {
        "codigo": "5504",
        "nome": "Remessa de mercadorias para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento."
    },
    {
        "codigo": "5505",
        "nome": "Remessa de mercadorias, adquiridas ou recebidas de terceiros, para formação de lote de exportação"
    },
    {
        "codigo": "5551",
        "nome": "Venda de bem do ativo imobilizado"
    },
    {
        "codigo": "5552",
        "nome": "Transferência de bem do ativo imobilizado"
    },
    {
        "codigo": "5553",
        "nome": "Devolução de compra de bem para o ativo imobilizado"
    },
    {
        "codigo": "5554",
        "nome": "Remessa de bem do ativo imobilizado para uso fora do estabelecimento"
    },
    {
        "codigo": "5555",
        "nome": "Devolução de bem do ativo imobilizado de terceiro, recebido para uso no estabelecimento"
    },
    {
        "codigo": "5556",
        "nome": "Devolução de compra de material de uso ou consumo"
    },
    {
        "codigo": "5557",
        "nome": "Transferência de material de uso ou consumo"
    },
    {
        "codigo": "5601",
        "nome": "Transferência de crédito de ICMS acumulado"
    },
    {
        "codigo": "5602",
        "nome": "Transferência de saldo credor de ICMS para outro estabelecimento da mesma empresa, destinado à compensação de saldo devedor de ICMS"
    },
    {
        "codigo": "5603",
        "nome": "Ressarcimento de ICMS retido por substituição tributária"
    },
    {
        "codigo": "5605",
        "nome": "Transferência de saldo devedor de ICMS de outro estabelecimento da mesma empresa. (ajuste sinief 03/04)"
    },
    {
        "codigo": "5606",
        "nome": "Utilização de saldo credor de ICMS para extinção por compensação de débitos fiscais."
    },
    {
        "codigo": "5651",
        "nome": "Venda de combustível ou lubrificante de produção do estabelecimento destinado à industrialização subseqüente"
    },
    {
        "codigo": "5652",
        "nome": "Venda de combustível ou lubrificante de produção do estabelecimento destinado à comercialização"
    },
    {
        "codigo": "5653",
        "nome": "Venda de combustível ou lubrificante de produção do estabelecimento destinado a consumidor ou usuário final"
    },
    {
        "codigo": "5654",
        "nome": "Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à industrialização subseqüente"
    },
    {
        "codigo": "5655",
        "nome": "Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à comercialização"
    },
    {
        "codigo": "5656",
        "nome": "Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado a consumidor ou usuário final"
    },
    {
        "codigo": "5657",
        "nome": "Remessa de combustível ou lubrificante adquirido ou recebido de terceiros para venda fora do estabelecimento"
    },
    {
        "codigo": "5658",
        "nome": "Transferência de combustível ou lubrificante de produção do estabelecimento"
    },
    {
        "codigo": "5659",
        "nome": "Transferência de combustível ou lubrificante adquirido ou recebido de terceiro"
    },
    {
        "codigo": "5660",
        "nome": "Devolução de compra de combustível ou lubrificante adquirido para industrialização subseqüente"
    },
    {
        "codigo": "5661",
        "nome": "Devolução de compra de combustível ou lubrificante adquirido para comercialização"
    },
    {
        "codigo": "5662",
        "nome": "Devolução de compra de combustível ou lubrificante adquirido por consumidor ou usuário final"
    },
    {
        "codigo": "5663",
        "nome": "Remessa para armazenagem de combustível ou lubrificante"
    },
    {
        "codigo": "5664",
        "nome": "Retorno de combustível ou lubrificante recebido para armazenagem"
    },
    {
        "codigo": "5665",
        "nome": "Retorno simbólico de combustível ou lubrificante recebido para armazenagem"
    },
    {
        "codigo": "5666",
        "nome": "Remessa por conta e ordem de terceiros de combustível ou lubrificante recebido para armazenagem"
    },
    {
        "codigo": "5667",
        "nome": "Venda de combustível ou lubrificante a consumidor ou usuário final estabelecido em outra unidade da Federação"
    },
    {
        "codigo": "5901",
        "nome": "Remessa para industrialização por encomenda"
    },
    {
        "codigo": "5902",
        "nome": "Retorno de mercadoria utilizada na industrialização por encomenda"
    },
    {
        "codigo": "5903",
        "nome": "Retorno de mercadoria recebida para industrialização e não aplicada no referido processo"
    },
    {
        "codigo": "5904",
        "nome": "Remessa para venda fora do estabelecimento, ou qualquer remessa efetuada pelo MEI com exceção das classificadas nos códigos 5.502 e 5.505"
    },
    {
        "codigo": "5905",
        "nome": "Remessa para depósito fechado ou armazém geral"
    },
    {
        "codigo": "5906",
        "nome": "Retorno de mercadoria depositada em depósito fechado ou armazém geral"
    },
    {
        "codigo": "5907",
        "nome": "Retorno simbólico de mercadoria depositada em depósito fechado ou armazém geral"
    },
    {
        "codigo": "5908",
        "nome": "Remessa de bem por conta de contrato de comodato ou locação"
    },
    {
        "codigo": "5909",
        "nome": "Retorno de bem recebido por conta de contrato de comodato ou locação"
    },
    {
        "codigo": "5910",
        "nome": "Remessa em bonificação, doação ou brinde"
    },
    {
        "codigo": "5911",
        "nome": "Remessa de amostra grátis"
    },
    {
        "codigo": "5912",
        "nome": "Remessa de mercadoria ou bem para demonstração"
    },
    {
        "codigo": "5913",
        "nome": "Retorno de mercadoria ou bem recebido para demonstração"
    },
    {
        "codigo": "5914",
        "nome": "Remessa de mercadoria ou bem para exposição ou feira"
    },
    {
        "codigo": "5915",
        "nome": "Remessa de mercadoria ou bem para conserto ou reparo"
    },
    {
        "codigo": "5916",
        "nome": "Retorno de mercadoria ou bem recebido para conserto ou reparo"
    },
    {
        "codigo": "5917",
        "nome": "Remessa de mercadoria em consignação mercantil ou industrial"
    },
    {
        "codigo": "5918",
        "nome": "Devolução de mercadoria recebida em consignação mercantil ou industrial"
    },
    {
        "codigo": "5919",
        "nome": "Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, recebida anteriormente em consignação mercantil ou industrial"
    },
    {
        "codigo": "5920",
        "nome": "Remessa de vasilhame ou sacaria"
    },
    {
        "codigo": "5921",
        "nome": "Devolução de vasilhame ou sacaria"
    },
    {
        "codigo": "5922",
        "nome": "Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura"
    },
    {
        "codigo": "5924",
        "nome": "Remessa para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente"
    },
    {
        "codigo": "5925",
        "nome": "Retorno de mercadoria recebida para industrialização por conta e ordem do adquirente da mercadoria, quando aquela não transitar pelo estabelecimento do adquirente"
    },
    {
        "codigo": "5926",
        "nome": "Lançamento efetuado a título de reclassificação de mercadoria decorrente de formação de kit ou de sua desagregação"
    },
    {
        "codigo": "5927",
        "nome": "Lançamento efetuado a título de baixa de estoque decorrente de perda, roubo ou deterioração"
    },
    {
        "codigo": "5928",
        "nome": "Lançamento efetuado a título de baixa de estoque decorrente do encerramento da atividade da empresa"
    },
    {
        "codigo": "5931",
        "nome": "Lançamento efetuado em decorrência da responsabilidade de retenção do imposto por substituição tributária, atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço"
    },
    {
        "codigo": "5932",
        "nome": "Prestação de serviço de transporte iniciada em unidade da Federação diversa daquela onde inscrito o prestador"
    },
    {
        "codigo": "5933",
        "nome": "Prestação de serviço tributado pelo ISSQN. (ajuste sinief 03/04)"
    },
    {
        "codigo": "5949",
        "nome": "Outra saída de mercadoria ou prestação de serviço não especificado"
    },
    {
        "codigo": "6101",
        "nome": "Venda de produção do estabelecimento"
    },
    {
        "codigo": "6102",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros, ou qualquer venda de mercadoria efetuada pelo MEI com exceção das saídas classificadas nos códigos 6.501, 6.502, 6.504 e 6.505"
    },
    {
        "codigo": "6103",
        "nome": "Venda de produção do estabelecimento, efetuada fora do estabelecimento"
    },
    {
        "codigo": "6104",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros, efetuada fora do estabelecimento"
    },
    {
        "codigo": "6105",
        "nome": "Venda de produção do estabelecimento que não deva por ele transitar"
    },
    {
        "codigo": "6106",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar"
    },
    {
        "codigo": "6107",
        "nome": "Venda de produção do estabelecimento, destinada a não contribuinte"
    },
    {
        "codigo": "6108",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros, destinada a não contribuinte"
    },
    {
        "codigo": "6109",
        "nome": "Venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio"
    },
    {
        "codigo": "6110",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio"
    },
    {
        "codigo": "6111",
        "nome": "Venda de produção do estabelecimento remetida anteriormente em consignação industrial"
    },
    {
        "codigo": "6112",
        "nome": "Venda de mercadoria adquirida ou recebida de Terceiros remetida anteriormente em consignação industrial"
    },
    {
        "codigo": "6113",
        "nome": "Venda de produção do estabelecimento remetida anteriormente em consignação mercantil"
    },
    {
        "codigo": "6114",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros remetida anteriormente em consignação mercantil"
    },
    {
        "codigo": "6115",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros, recebida anteriormente em consignação mercantil"
    },
    {
        "codigo": "6116",
        "nome": "Venda de produção do estabelecimento originada de encomenda para entrega futura"
    },
    {
        "codigo": "6117",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros, originada de encomenda para entrega futura"
    },
    {
        "codigo": "6118",
        "nome": "Venda de produção do estabelecimento entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem"
    },
    {
        "codigo": "6119",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem"
    },
    {
        "codigo": "6120",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário pelo vendedor remetente, em venda à ordem"
    },
    {
        "codigo": "6122",
        "nome": "Venda de produção do estabelecimento remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente"
    },
    {
        "codigo": "6123",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente"
    },
    {
        "codigo": "6124",
        "nome": "Industrialização efetuada para outra empresa"
    },
    {
        "codigo": "6125",
        "nome": "Industrialização efetuada para outra empresa quando a mercadoria recebida para utilização no processo de industrialização não transitar pelo estabelecimento adquirente da mercadoria"
    },
    {
        "codigo": "6151",
        "nome": "Transferência de produção do estabelecimento"
    },
    {
        "codigo": "6152",
        "nome": "Transferência de mercadoria adquirida ou recebida de terceiros"
    },
    {
        "codigo": "6153",
        "nome": "Transferência de energia elétrica"
    },
    {
        "codigo": "6155",
        "nome": "Transferência de produção do estabelecimento, que não deva por ele transitar"
    },
    {
        "codigo": "6156",
        "nome": "Transferência de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar"
    },
    {
        "codigo": "6159",
        "nome": "Fornecimento de produção do estabelecimento de ato cooperativo"
    },
    {
        "codigo": "6160",
        "nome": "Fornecimento de mercadoria adquirida ou recebida de terceiros de ato cooperativo"
    },
    {
        "codigo": "6201",
        "nome": "Devolução de compra para industrialização"
    },
    {
        "codigo": "6202",
        "nome": "Devolução de compra para comercialização, ou qualquer devolução de mercadoria efetuada pelo MEI com exceção das classificadas no código 6.503"
    },
    {
        "codigo": "6205",
        "nome": "Anulação de valor relativo a aquisição de serviço de comunicação"
    },
    {
        "codigo": "6206",
        "nome": "Anulação de valor relativo a aquisição de serviço de transporte"
    },
    {
        "codigo": "6207",
        "nome": "Anulação de valor relativo à compra de energia elétrica"
    },
    {
        "codigo": "6208",
        "nome": "Devolução de mercadoria recebida em transferência para industrialização"
    },
    {
        "codigo": "6209",
        "nome": "Devolução de mercadoria recebida em transferência para comercialização"
    },
    {
        "codigo": "6210",
        "nome": "Devolução de compra para utilização na prestação de serviço"
    },
    {
        "codigo": "6251",
        "nome": "Venda de energia elétrica para distribuição ou comercialização"
    },
    {
        "codigo": "6252",
        "nome": "Venda de energia elétrica para estabelecimento industrial"
    },
    {
        "codigo": "6253",
        "nome": "Venda de energia elétrica para estabelecimento comercial"
    },
    {
        "codigo": "6254",
        "nome": "Venda de energia elétrica para estabelecimento prestador de serviço de transporte"
    },
    {
        "codigo": "6255",
        "nome": "Venda de energia elétrica para estabelecimento prestador de serviço de comunicação"
    },
    {
        "codigo": "6256",
        "nome": "Venda de energia elétrica para estabelecimento de produtor rural"
    },
    {
        "codigo": "6257",
        "nome": "Venda de energia elétrica para consumo por demanda contratada"
    },
    {
        "codigo": "6258",
        "nome": "Venda de energia elétrica a não contribuinte"
    },
    {
        "codigo": "6301",
        "nome": "Prestação de serviço de comunicação para execução de serviço da mesma natureza"
    },
    {
        "codigo": "6302",
        "nome": "Prestação de serviço de comunicação a estabelecimento industrial"
    },
    {
        "codigo": "6303",
        "nome": "Prestação de serviço de comunicação a estabelecimento comercial"
    },
    {
        "codigo": "6304",
        "nome": "Prestação de serviço de comunicação a estabelecimento de prestador de serviço de transporte"
    },
    {
        "codigo": "6305",
        "nome": "Prestação de serviço de comunicação a estabelecimento de geradora ou de distribuidora de energia elétrica"
    },
    {
        "codigo": "6306",
        "nome": "Prestação de serviço de comunicação a estabelecimento de produtor rural"
    },
    {
        "codigo": "6307",
        "nome": "Prestação de serviço de comunicação a não contribuinte"
    },
    {
        "codigo": "6351",
        "nome": "Prestação de serviço de transporte para execução de serviço da mesma natureza"
    },
    {
        "codigo": "6352",
        "nome": "Prestação de serviço de transporte a estabelecimento industrial"
    },
    {
        "codigo": "6353",
        "nome": "Prestação de serviço de transporte a estabelecimento comercial"
    },
    {
        "codigo": "6354",
        "nome": "Prestação de serviço de transporte a estabelecimento de prestador de serviço de comunicação"
    },
    {
        "codigo": "6355",
        "nome": "Prestação de serviço de transporte a estabelecimento de geradora ou de distribuidora de energia elétrica"
    },
    {
        "codigo": "6356",
        "nome": "Prestação de serviço de transporte a estabelecimento de produtor rural"
    },
    {
        "codigo": "6357",
        "nome": "Prestação de serviço de transporte a não contribuinte"
    },
    {
        "codigo": "6359",
        "nome": "Prestação de serviço de transporte a contribuinte ou a não contribuinte quando a mercadoria transportada está dispensada de emissão de nota fiscal. (ajuste sinief 03/04)"
    },
    {
        "codigo": "6360",
        "nome": "Prestação de serviço de transporte a contribuinte substituto em relação ao serviço de transporte"
    },
    {
        "codigo": "6401",
        "nome": "Venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária, na condição de contribuinte substituto"
    },
    {
        "codigo": "6402",
        "nome": "Venda de produção do estabelecimento de produto sujeito ao regime de substituição tributária, em operação entre contribuintes substitutos do mesmo produto"
    },
    {
        "codigo": "6403",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária, na condição de contribuinte substituto"
    },
    {
        "codigo": "6404",
        "nome": "Venda de mercadoria sujeita ao regime de substituição tributária, cujo imposto já tenha sido retido anteriormente"
    },
    {
        "codigo": "6408",
        "nome": "Transferência de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária"
    },
    {
        "codigo": "6409",
        "nome": "Transferência de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "6410",
        "nome": "Devolução de compra para industrialização em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "6411",
        "nome": "Devolução de compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "6412",
        "nome": "Devolução de bem do ativo imobilizado, em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "6413",
        "nome": "Devolução de mercadoria destinada ao uso ou consumo, em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "6414",
        "nome": "Remessa de produção do estabelecimento para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária"
    },
    {
        "codigo": "6415",
        "nome": "Remessa de mercadoria adquirida ou recebida de terceiros para venda fora do estabelecimento, em operação com mercadoria sujeita ao regime de substituição tributária"
    },
    {
        "codigo": "6451",
        "nome": "Remessa de animal - Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "6452",
        "nome": "Remessa de insumo - Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "6453",
        "nome": "Retorno de animal ou da produção - Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "6454",
        "nome": "Retorno simbólico de animal ou da produção - Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "6455",
        "nome": "Retorno de insumos não utilizados na produção - Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "6456",
        "nome": "Saída referente a remuneração do produtor - Sistema de Integração e Parceria Rural"
    },
    {
        "codigo": "6501",
        "nome": "Remessa de produção do estabelecimento, com fim específico de exportação"
    },
    {
        "codigo": "6502",
        "nome": "Remessa de mercadoria adquirida ou recebida de terceiros, com fim específico de exportação"
    },
    {
        "codigo": "6503",
        "nome": "Devolução de mercadoria recebida com fim específico de exportação"
    },
    {
        "codigo": "6504",
        "nome": "Remessa de mercadorias para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento."
    },
    {
        "codigo": "6505",
        "nome": "Remessa de mercadorias, adquiridas ou recebidas de terceiros, para formação de lote de exportação"
    },
    {
        "codigo": "6551",
        "nome": "Venda de bem do ativo imobilizado"
    },
    {
        "codigo": "6552",
        "nome": "Transferência de bem do ativo imobilizado"
    },
    {
        "codigo": "6553",
        "nome": "Devolução de compra de bem para o ativo imobilizado"
    },
    {
        "codigo": "6554",
        "nome": "Remessa de bem do ativo imobilizado para uso fora do estabelecimento"
    },
    {
        "codigo": "6555",
        "nome": "Devolução de bem do ativo imobilizado de terceiro, recebido para uso no estabelecimento"
    },
    {
        "codigo": "6556",
        "nome": "Devolução de compra de material de uso ou consumo"
    },
    {
        "codigo": "6557",
        "nome": "Transferência de material de uso ou consumo"
    },
    {
        "codigo": "6603",
        "nome": "Ressarcimento de ICMS retido por substituição tributária"
    },
    {
        "codigo": "6651",
        "nome": "Venda de combustível ou lubrificante de produção do estabelecimento destinado à industrialização subseqüente"
    },
    {
        "codigo": "6652",
        "nome": "Venda de combustível ou lubrificante de produção do estabelecimento destinado à comercialização"
    },
    {
        "codigo": "6653",
        "nome": "Venda de combustível ou lubrificante de produção do estabelecimento destinado a consumidor ou usuário final"
    },
    {
        "codigo": "6654",
        "nome": "Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à industrialização subseqüente"
    },
    {
        "codigo": "6655",
        "nome": "Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à comercialização"
    },
    {
        "codigo": "6656",
        "nome": "Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado a consumidor ou usuário final"
    },
    {
        "codigo": "6657",
        "nome": "Remessa de combustível ou lubrificante adquirido ou recebido de terceiros para venda fora do estabelecimento"
    },
    {
        "codigo": "6658",
        "nome": "Transferência de combustível ou lubrificante de produção do estabelecimento"
    },
    {
        "codigo": "6659",
        "nome": "Transferência de combustível ou lubrificante adquirido ou recebido de terceiro"
    },
    {
        "codigo": "6660",
        "nome": "Devolução de compra de combustível ou lubrificante adquirido para industrialização subseqüente"
    },
    {
        "codigo": "6661",
        "nome": "Devolução de compra de combustível ou lubrificante adquirido para comercialização"
    },
    {
        "codigo": "6662",
        "nome": "Devolução de compra de combustível ou lubrificante adquirido por consumidor ou usuário final"
    },
    {
        "codigo": "6663",
        "nome": "Remessa para armazenagem de combustível ou lubrificante"
    },
    {
        "codigo": "6664",
        "nome": "Retorno de combustível ou lubrificante recebido para armazenagem"
    },
    {
        "codigo": "6665",
        "nome": "Retorno simbólico de combustível ou lubrificante recebido para armazenagem"
    },
    {
        "codigo": "6666",
        "nome": "Remessa por conta e ordem de terceiros de combustível ou lubrificante recebido para armazenagem"
    },
    {
        "codigo": "6667",
        "nome": "Venda de combustível ou lubrificante a consumidor ou usuário final estabelecido em outra unidade da Federação diferente a da que ocorrer o consumo"
    },
    {
        "codigo": "6901",
        "nome": "Remessa para industrialização por encomenda"
    },
    {
        "codigo": "6902",
        "nome": "Retorno de mercadoria utilizada na industrialização por encomenda"
    },
    {
        "codigo": "6903",
        "nome": "Retorno de mercadoria recebida para industrialização e não aplicada no referido processo"
    },
    {
        "codigo": "6904",
        "nome": "Remessa para venda fora do estabelecimento, ou qualquer remessa efetuada pelo MEI com exceção das classificadas nos códigos 6.502 e 6.505"
    },
    {
        "codigo": "6905",
        "nome": "Remessa para depósito fechado ou armazém geral"
    },
    {
        "codigo": "6906",
        "nome": "Retorno de mercadoria depositada em depósito fechado ou armazém geral"
    },
    {
        "codigo": "6907",
        "nome": "Retorno simbólico de mercadoria depositada em depósito fechado ou armazém geral"
    },
    {
        "codigo": "6908",
        "nome": "Remessa de bem por conta de contrato de comodato ou locação"
    },
    {
        "codigo": "6909",
        "nome": "Retorno de bem recebido por conta de contrato de comodato ou locação"
    },
    {
        "codigo": "6910",
        "nome": "Remessa em bonificação, doação ou brinde"
    },
    {
        "codigo": "6911",
        "nome": "Remessa de amostra grátis"
    },
    {
        "codigo": "6912",
        "nome": "Remessa de mercadoria ou bem para demonstração"
    },
    {
        "codigo": "6913",
        "nome": "Retorno de mercadoria ou bem recebido para demonstração"
    },
    {
        "codigo": "6914",
        "nome": "Remessa de mercadoria ou bem para exposição ou feira"
    },
    {
        "codigo": "6915",
        "nome": "Remessa de mercadoria ou bem para conserto ou reparo"
    },
    {
        "codigo": "6916",
        "nome": "Retorno de mercadoria ou bem recebido para conserto ou reparo"
    },
    {
        "codigo": "6917",
        "nome": "Remessa de mercadoria em consignação mercantil ou industrial"
    },
    {
        "codigo": "6918",
        "nome": "Devolução de mercadoria recebida em consignação mercantil ou industrial"
    },
    {
        "codigo": "6919",
        "nome": "Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, recebida anteriormente em consignação mercantil ou industrial"
    },
    {
        "codigo": "6920",
        "nome": "Remessa de vasilhame ou sacaria"
    },
    {
        "codigo": "6921",
        "nome": "Devolução de vasilhame ou sacaria"
    },
    {
        "codigo": "6922",
        "nome": "Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura"
    },
    {
        "codigo": "6924",
        "nome": "Remessa para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente"
    },
    {
        "codigo": "6925",
        "nome": "Retorno de mercadoria recebida para industrialização por conta e ordem do adquirente da mercadoria, quando aquela não transitar pelo estabelecimento do adquirente"
    },
    {
        "codigo": "6929",
        "nome": "Lançamento efetuado em decorrência de emissão de documento fiscal relativo a operação ou prestação também registrada em equipamento Emissor de Cupom Fiscal - ECF"
    },
    {
        "codigo": "6931",
        "nome": "Lançamento efetuado em decorrência da responsabilidade de retenção do imposto por substituição tributária, atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço"
    },
    {
        "codigo": "6932",
        "nome": "Prestação de serviço de transporte iniciada em unidade da Federação diversa daquela onde inscrito o prestador"
    },
    {
        "codigo": "6933",
        "nome": "Prestação de serviço tributado pelo ISSQN (ajuste sinief 03/04)"
    },
    {
        "codigo": "6949",
        "nome": "Outra saída de mercadoria ou prestação de serviço não especificado"
    },
    {
        "codigo": "7101",
        "nome": "Venda de produção do estabelecimento"
    },
    {
        "codigo": "7102",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros"
    },
    {
        "codigo": "7105",
        "nome": "Venda de produção do estabelecimento, que não deva por ele transitar"
    },
    {
        "codigo": "7106",
        "nome": "Venda de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar"
    },
    {
        "codigo": "7127",
        "nome": "Venda de produção do estabelecimento sob o regime de drawback"
    },
    {
        "codigo": "7201",
        "nome": "Devolução de compra para industrialização"
    },
    {
        "codigo": "7202",
        "nome": "Devolução de compra para comercialização"
    },
    {
        "codigo": "7205",
        "nome": "Anulação de valor relativo à aquisição de serviço de comunicação"
    },
    {
        "codigo": "7206",
        "nome": "Anulação de valor relativo a aquisição de serviço de transporte"
    },
    {
        "codigo": "7207",
        "nome": "Anulação de valor relativo à compra de energia elétrica"
    },
    {
        "codigo": "7210",
        "nome": "Devolução de compra para utilização na prestação de serviço"
    },
    {
        "codigo": "7211",
        "nome": "Devolução de compras para industrialização sob o regime de drawback"
    },
    {
        "codigo": "7251",
        "nome": "Venda de energia elétrica para o exterior"
    },
    {
        "codigo": "7301",
        "nome": "Prestação de serviço de comunicação para execução de serviço da mesma natureza"
    },
    {
        "codigo": "7358",
        "nome": "Prestação de serviço de transporte"
    },
    {
        "codigo": "7501",
        "nome": "Exportação de mercadorias recebidas com fim específico de exportação"
    },
    {
        "codigo": "7504",
        "nome": "Exportação de mercadoria que foi objeto de formação de lote de exportação"
    },
    {
        "codigo": "7551",
        "nome": "Venda de bem do ativo imobilizado"
    },
    {
        "codigo": "7553",
        "nome": "Devolução de compra de bem para o ativo imobilizado"
    },
    {
        "codigo": "7556",
        "nome": "Devolução de compra de material de uso ou consumo"
    },
    {
        "codigo": "7651",
        "nome": "Venda de combustível ou lubrificante de produção do estabelecimento destinado à industrialização subseqüente"
    },
    {
        "codigo": "7654",
        "nome": "Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à industrialização subseqüente"
    },
    {
        "codigo": "7667",
        "nome": "Venda de combustível ou lubrificante a consumidor ou usuário final"
    },
    {
        "codigo": "7930",
        "nome": "Lançamento efetuado a título de devolução de bem cuja entrada tenha ocorrido sob amparo de regime especial aduaneiro de admissão temporária"
    },
    {
        "codigo": "7949",
        "nome": "Outra saída de mercadoria ou prestação de serviço não especificado"
    },
    {
        "codigo": "1934",
        "nome": "Entrada simbólica de mercadoria recebida para depósito fechado ou armazém geral"
    },
    {
        "codigo": "2934",
        "nome": "Entrada simbólica de mercadoria recebida para depósito fechado ou armazém geral"
    },
    {
        "codigo": "5923",
        "nome": "Remessa de mercadoria por conta e ordem de terceiros, em venda à ordem ou em operações com armazém geral ou depósito fechado"
    },
    {
        "codigo": "5934",
        "nome": "Remessa simbólica de mercadoria depositada em armazém geral ou depósito fechado"
    },
    {
        "codigo": "6923",
        "nome": "Remessa de mercadoria por conta e ordem de terceiros, em venda à ordem ou em operações com armazém geral ou depósito fechado"
    },
    {
        "codigo": "6934",
        "nome": "Remessa simbólica de mercadoria depositada em armazém geral ou depósito fechado"
    },
    {
        "codigo": "1128",
        "nome": "Compra para utilização na prestação de serviço sujeita ao ISSQN"
    },
    {
        "codigo": "2128",
        "nome": "Compra para utilização na prestação de serviço sujeita ao ISSQN"
    },
    {
        "codigo": "3128",
        "nome": "Compra para utilização na prestação de serviço sujeita ao ISSQN"
    },
    {
        "codigo": "1212",
        "nome": "Devolução de venda no mercado interno de mercadoria industrializada e insumo importado sob o Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped)"
    },
    {
        "codigo": "2212",
        "nome": "Devolução de venda no mercado interno de mercadoria industrializada e insumo importado sob o Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped)"
    },
    {
        "codigo": "3129",
        "nome": "Compra para industrialização sob o Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped)"
    },
    {
        "codigo": "3212",
        "nome": "Devolução de venda no mercado externo de mercadoria industrializada sob o Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped)"
    },
    {
        "codigo": "5129",
        "nome": "Venda de insumo importado e de mercadoria industrializada sob o amparo do Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped"
    },
    {
        "codigo": "6129",
        "nome": "Venda de insumo importado e de mercadoria industrializada sob o amparo do Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped)"
    },
    {
        "codigo": "7129",
        "nome": "Venda de produção do estabelecimento ao mercado externo de mercadoria industrializada sob o amparo do Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped)"
    },
    {
        "codigo": "7212",
        "nome": "Devolução de compras para industrialização sob o regime de Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped)"
    },
    {
        "codigo": "1131",
        "nome": "Entrada de mercadoria com previsão de posterior ajuste ou fixação de preço, decorrente de operação de ato cooperativo."
    },
    {
        "codigo": "1132",
        "nome": "Fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, em ato cooperativo, para comercialização"
    },
    {
        "codigo": "1135",
        "nome": "Fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, em ato cooperativo, para industrialização."
    },
    {
        "codigo": "1213",
        "nome": "Devolução de remessa de produção do estabelecimento com previsão de posterior ajuste ou fixação de preço, em ato cooperativo."
    },
    {
        "codigo": "1214",
        "nome": "Devolução de fixação de preço de produção do estabelecimento produtor, de ato cooperativo."
    },
    {
        "codigo": "2131",
        "nome": "Entrada de mercadoria com previsão de posterior ajuste ou fixação de preço, decorrente de operação de ato cooperativo."
    },
    {
        "codigo": "2132",
        "nome": "Fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, em ato cooperativo, para comercialização."
    },
    {
        "codigo": "2135",
        "nome": "Fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, em ato cooperativo, para industrialização."
    },
    {
        "codigo": "2213",
        "nome": "Devolução de remessa de produção do estabelecimento com previsão de posterior ajuste ou fixação de preço, em ato cooperativo."
    },
    {
        "codigo": "2214",
        "nome": "Devolução de fixação de preço de produção do estabelecimento produtor, de ato cooperativo."
    },
    {
        "codigo": "5131",
        "nome": "Remessa de produção do estabelecimento, com previsão de posterior ajuste ou fixação de preço, de ato cooperativo."
    },
    {
        "codigo": "5132",
        "nome": "Fixação de preço de produção do estabelecimento, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço de ato cooperativo."
    },
    {
        "codigo": "5213",
        "nome": "Devolução de entrada de mercadoria com previsão de posterior ajuste ou fixação de preço, em ato cooperativo."
    },
    {
        "codigo": "5214",
        "nome": "Devolução de fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, de ato cooperativo, para comercialização."
    },
    {
        "codigo": "5215",
        "nome": "Devolução de fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, de ato cooperativo, para industrialização."
    },
    {
        "codigo": "6131",
        "nome": "Remessa de produção de estabelecimento, com previsão de posterior ajuste ou fixação de preço de ato cooperativo."
    },
    {
        "codigo": "6132",
        "nome": "Fixação de preço de produção do estabelecimento, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço ou fixação de preço de ato cooperativo."
    },
    {
        "codigo": "6213",
        "nome": "Devolução de entrada de mercadoria com previsão de posterior ajuste ou fixação de preço, em ato cooperativo."
    },
    {
        "codigo": "6214",
        "nome": "Devolução de fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, de ato cooperativo, para comercialização."
    },
    {
        "codigo": "6215",
        "nome": "Devolução de fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, de ato cooperativo para industrialização."
    },
    {
        "codigo": "1215",
        "nome": "Devolução de fornecimento de produção do estabelecimento de ato cooperativo"
    },
    {
        "codigo": "1216",
        "nome": "Devolução de fornecimento de mercadoria adquirida ou recebida de terceiros de ato cooperativo"
    },
    {
        "codigo": "2215",
        "nome": "Devolução de fornecimento de produção do estabelecimento de ato cooperativo"
    },
    {
        "codigo": "2216",
        "nome": "Devolução de fornecimento de mercadoria adquirida ou recebida de terceiros de ato cooperativo"
    },
    {
        "codigo": "5216",
        "nome": "Devolução de entrada decorrente do fornecimento de produto ou mercadoria de ato cooperativo"
    },
    {
        "codigo": "6216",
        "nome": "Devolução de entrada decorrente do fornecimento de produto ou mercadoria de ato cooperativo"
    },
    {
        "codigo": "5929",
        "nome": "Lançamento efetuado em decorrência de emissão de documento fiscal relativo a operação ou prestação também acobertada por documento fiscal do varejo"
    },
    {
        "codigo": "3552",
        "nome": "Entrada de produtos destinados ao uso ou consumo de bordo, em embarcações ou aeronaves exclusivamente em tráfego internacional com destino ao exterior"
    },
    {
        "codigo": "3667",
        "nome": "Entrada de combustível ou lubrificante para consumo final, em embarcações ou aeronaves exclusivamente em tráfego internacional com destino ao exterior"
    },
    {
        "codigo": "7552",
        "nome": "Saída de produtos destinados ao uso ou consumo de bordo, em embarcações ou aeronaves exclusivamente em tráfego internacional com destino ao exterior"
    },
    {
        "codigo": "7599",
        "nome": "Saída de produtos destinados ao uso ou consumo de bordo, em embarcações ou aeronaves exclusivamente em tráfego internacional com destino ao exterior"
    },
    {
        "codigo": "7599",
        "nome": "Saída de produtos destinados ao uso ou consumo de bordo, em embarcações ou aeronaves exclusivamente em tráfego internacional com destino ao exterior"
    }
]

export default jsonData;