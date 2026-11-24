/* Material original de revisão local — Anexo I, Conhecimentos Gerais (CG01–CG03). */
window.PIRAQUARA = (() => {
  const sources=[
    ['Edital 126/2026 · Anexo I','https://www.diariomunicipal.com.br/amp/materia/3401F893'],
    ['IBGE · Histórico e formação administrativa','https://www.ibge.gov.br/biblioteca/visualizacao/dtb/parana/piraquara.pdf'],
    ['IBGE · Cidades e Estados: Piraquara','https://www.ibge.gov.br/cidades-e-estados/pr/piraquara.html'],
    ['Prefeitura · Diagnóstico municipal','https://www.piraquara.pr.gov.br/storage/content/publicacoes/documentos/6162/arquivos/documentos-20230613155809.pdf'],
    ['Prefeitura · Perfil do município','https://www.piraquara.pr.gov.br/portal/servicos/1009/perfil/'],
    ['Prefeitura · Plano Municipal de Política Cultural 2023–2032','https://www.piraquara.pr.gov.br/storage/content/midias/file-20240327164733-planomunicipaldepolticaculturaldepiraquara20232032.pdf'],
    ['Câmara Municipal · História de Piraquara','https://www.piraquara.pr.leg.br/institucional/historia'],
    ['Prefeitura · Meio ambiente','https://www.piraquara.pr.gov.br/portal/secretarias/44/meio-ambiente'],
    ['Prefeitura · Casa da Memória','https://www.piraquara.pr.gov.br/portal/secretarias-paginas/182/casa-de-memoria-manoel-alves-pereira/'],
    ['Prefeitura · Centro de Memória Ferroviária','https://www.piraquara.pr.gov.br/portal/secretarias-paginas/183/centro-de-memoria-ferroviaria-de-piraquara/'],
    ['Prefeitura · Turismo histórico e patrimônio natural','https://www.piraquara.pr.gov.br/portal/noticias/0/3/3371/piraquara-entra-no-circuito-turistico-cidades-historicas-do-parana'],
    ['Prefeitura · Caminho Trentino dos Mananciais da Serra','https://www.piraquara.pr.gov.br/portal/leis_decretos/79615/']
  ];
  const timeline=[
    ['Antes da colonização europeia','Povos originários','A região já era frequentada por indígenas carijós, ligados aos guaranis, segundo o histórico da Câmara Municipal.','book'],
    ['Por volta de 1700','Ocupação colonial e mineração','Manoel Picam de Carvalho estabeleceu uma fazenda associada à exploração do ouro. O povoamento estava ligado a São José dos Pinhais.','home'],
    ['1878','Imigração trentino-tirolesa','Cerca de 350 imigrantes estabeleceram a Colônia Imperial de Santa Maria do Novo Tirol da Boca da Serra, atual Nova Tirol.','home'],
    ['1885','Ferrovia e freguesia','A ferrovia entre o litoral e Curitiba impulsionou a região; também nesse ano o povoado tornou-se freguesia, sob o nome Senhor Bom Jesus de Piraquara.','chart'],
    ['10 e 29 jan. 1890','Vila Deodoro e instalação','A elevação à vila em 10 de janeiro separou a localidade de São José dos Pinhais. O município foi instalado em 29 de janeiro com o nome Deodoro.','flag'],
    ['1892','Primeiras eleições municipais','Segundo o Plano Municipal de Cultura, foram eleitos seis camaristas e José da Costa Vianna como prefeito.','flag'],
    ['1905–1908','Reservatório do Carvalho','A construção teve início em 1905 e a inauguração ocorreu em 1908, marcando o abastecimento público de Curitiba.','target'],
    ['10 abr. 1929','O nome Piraquara retorna','O município, até então denominado Deodoro, voltou a utilizar o nome Piraquara.','cal'],
    ['1964–1992','Pinhais e a divisão territorial','Pinhais foi criado como distrito e incorporado a Piraquara em 1964. Em 1992, foi desmembrado, tornando-se município.','layers']
  ];
  const facts=[
    {icon:'home',title:'Geografia e localização',text:'Piraquara está na porção leste da Região Metropolitana de Curitiba. Faz limite com Quatro Barras (norte), Morretes (leste), São José dos Pinhais (sul) e Pinhais (oeste). A área territorial informada pelo IBGE é de 225,065 km² (2025). Sua localização aproxima ambientes da Serra do Mar de áreas urbanas metropolitanas.',tag:'CG02'},
    {icon:'shield',title:'Água e meio ambiente',text:'Os mananciais e as nascentes vinculados ao Rio Iguaçu tornam a cidade relevante para o abastecimento metropolitano. As APAs do Piraquara e do Iraí são exemplos de áreas protegidas. Proteger matas, tratar esgoto e planejar o solo reduz riscos à qualidade da água. Percentuais de abastecimento variam conforme a fonte e o período: priorize a relação geográfica e confira o indicador antes da prova.',tag:'CG02'},
    {icon:'chart',title:'População e economia',text:'O Censo 2022 registrou 118.730 moradores e densidade de 522,94 habitantes por km². Não confunda o resultado censitário com estimativas anuais. A economia local reúne comércio, serviços, atividades rurais e turismo ligado à natureza e à história. O desenvolvimento urbano exige articulação com saneamento, transporte e conservação dos mananciais.',tag:'CG03'},
    {icon:'book',title:'Cultura e patrimônio',text:'A presença indígena, a imigração trentina e a memória do trabalho ferroviário integram a formação da identidade local. A Casa da Memória Manoel Alves Pereira preserva e divulga a história do município, enquanto o Centro de Memória Ferroviária João Tesserolli Júnior valoriza a trajetória das ferrovias. O Caminho Trentino dos Mananciais da Serra associa turismo rural, cultura e paisagem.',tag:'CG01'},
    {icon:'flag',title:'História político-administrativa',text:'Diferencie a freguesia criada em 1885, a elevação à vila em 10/01/1890 e a instalação do município em 29/01/1890. O nome Deodoro homenageava o primeiro presidente da República; a denominação Piraquara voltou em 1929. A data de aniversário municipal, 29 de janeiro, refere-se à instalação.',tag:'CG01'}
  ];
  const reminders=[
    ['Nome do município','Origem indígena: o topônimo associa peixe a buraco ou cova, conforme o histórico do IBGE.'],
    ['Gentílico','Piraquarense.'],
    ['Aniversário','29 de janeiro — instalação municipal em 1890.'],
    ['Padroeiro','Senhor Bom Jesus dos Passos.'],
    ['Freguesia × vila','1885 × 1890. Deodoro não era outro município independente; foi a denominação adotada na criação.'],
    ['Censo × estimativa','118.730 é a população recenseada de 2022. Indicadores de outros anos devem trazer sua referência.']
  ];
  // Quatro alternativas, com comentários individuais. A primeira opção é a correta,
  // e será posicionada segundo a chave fixa abaixo (cinco respostas de cada letra).
  const rows=[
    ['CG01','Ao organizar uma exposição sobre a ocupação da região, um pesquisador consulta o histórico da Câmara Municipal. Qual afirmação evita reduzir a história de Piraquara à chegada de imigrantes europeus?',
      ['Povos originários, incluindo carijós, já circulavam pela região.','A ocupação humana começou com a fundação da Colônia Santa Maria, em 1878.','A presença indígena surgiu somente após a expansão da ferrovia, em 1885.','O povoamento indígena iniciou-se quando a antiga vila recebeu o nome Deodoro.'],
      ['O histórico da Câmara registra circulação indígena anterior à colonização europeia. A imigração oitocentista é uma etapa posterior.','A colônia impulsionou a ocupação europeia, mas não inaugurou a presença humana na região.','A ferrovia integra a história do século XIX; a presença indígena é anterior.','O nome Deodoro pertence à história administrativa, não à origem da presença indígena.']],
    ['CG01','O núcleo colonial associado à fazenda de Manoel Picam de Carvalho, por volta de 1700, relacionava-se principalmente a qual processo econômico?',
      ['Exploração mineral em busca de ouro.','Implantação de estações ferroviárias.','Formação da colônia trentino-tirolesa.','Construção do reservatório de abastecimento.'],
      ['A procura por ouro motivou a instalação do núcleo de mineração.','A ferrovia é um acontecimento do século XIX, não do início do XVIII.','A imigração organizada ocorreu em 1878, muito depois do núcleo colonial.','O Reservatório do Carvalho começou a ser construído em 1905.']],
    ['CG01','O histórico do IBGE atribui à palavra Piraquara uma origem indígena. Qual associação corresponde à interpretação registrada?',
      ['Peixe e buraco ou cova.','Rio e montanha ou serra.','Pedra e nascente ou fonte.','Mata e caminho ou trilha.'],
      ['O IBGE registra os elementos ligados a peixe e buraco/cova.','A paisagem montanhosa é relevante, mas não corresponde à etimologia apresentada.','A relação com a água não torna essa associação a interpretação do topônimo.','Esses elementos não correspondem à explicação registrada no histórico.']],
    ['CG01','A Colônia Santa Maria, atual Nova Tirol, está associada principalmente a qual herança cultural de Piraquara?',
      ['Imigração ligada às regiões de Trento e Tirol.','Imigração ligada ao interior da região do Alentejo.','Imigração procedente predominantemente da Galícia espanhola.','Imigração organizada a partir da região da Renânia.'],
      ['A formação da colônia em 1878 é ligada aos imigrantes trentino-tiroleses.','A presença portuguesa é relevante à história regional, mas não caracteriza a origem indicada para essa colônia.','A Galícia não corresponde à origem cultural registrada para a Colônia Santa Maria.','As fontes municipais vinculam a colônia ao Trento e ao Tirol, não à Renânia.']],
    ['CG01','Do ponto de vista da circulação regional, a ligação ferroviária inaugurada em 1885 conectava quais áreas, passando por Piraquara?',
      ['O litoral paranaense e Curitiba.','Curitiba e o norte pioneiro do Paraná.','A fronteira paraguaia e Curitiba.','O litoral catarinense e o oeste do Paraná.'],
      ['A Estrada de Ferro Paranaguá–Curitiba ligava o litoral à capital e passava por Piraquara.','É outra relação regional: não corresponde ao trajeto histórico citado.','O percurso indicado ligava a capital ao litoral, não à fronteira internacional.','A ligação referida era entre Paranaguá e Curitiba, no Paraná.']],
    ['CG01','Em 1885, além da inauguração ferroviária, ocorreu uma mudança na organização administrativa do povoado. Qual foi ela?',
      ['Elevação à freguesia de Senhor Bom Jesus de Piraquara.','Elevação à vila com a denominação oficial de Deodoro.','Desmembramento do distrito de Pinhais em novo município.','Retorno do nome Piraquara à denominação da vila Deodoro.'],
      ['A freguesia foi criada em dezembro de 1885, ainda vinculada a São José dos Pinhais.','A elevação à vila ocorreu em 1890.','O desmembramento de Pinhais ocorreu em 1992.','O município voltou a usar Piraquara em 1929.']],
    ['CG01','Uma questão pede a data de instalação do município de Piraquara, e não a data do decreto de elevação à vila. Qual é a resposta?',
      ['29 de janeiro de 1890.','10 de janeiro de 1890.','9 de dezembro de 1885.','10 de abril de 1929.'],
      ['O município foi instalado em 29 de janeiro de 1890, data do aniversário municipal.','O dia 10 corresponde à elevação à vila, não à instalação.','Dezembro de 1885 marca a criação da freguesia.','Abril de 1929 marca o retorno da denominação Piraquara.']],
    ['CG01','Um documento municipal datado de 1928 apresenta a denominação “Deodoro”. O que explica esse uso?',
      ['Piraquara ainda se denominava Deodoro; o nome atual retornou em 1929.','Deodoro era um distrito de Pinhais, incorporado a Piraquara em 1929.','O nome Deodoro era adotado para designar exclusivamente a colônia Nova Tirol.','Piraquara passou a utilizar Deodoro somente após o desmembramento de Pinhais.'],
      ['O antigo nome municipal foi utilizado de 1890 até a mudança de denominação em 1929.','Pinhais pertenceu a Piraquara como distrito em período posterior; não explica a denominação.','Deodoro era o nome do município, não apenas da colônia.','Pinhais se emancipou em 1992; Deodoro é anterior a esse evento.']],
    ['CG01','Uma placa do Reservatório do Carvalho distingue o início das obras da inauguração. Quais anos correspondem, respectivamente, a esses dois marcos?',
      ['1905 e 1908.','1908 e 1910.','1885 e 1890.','1928 e 1929.'],
      ['As obras tiveram início em 1905 e a inauguração aconteceu em 1908.','1908 corresponde à inauguração, não ao início das obras.','Esses anos estão associados à ferrovia, freguesia e formação do município.','Esse par se refere ao período do prédio histórico municipal e da mudança de nome.']],
    ['CG01','Qual afirmação descreve corretamente a relação administrativa histórica de Pinhais com Piraquara?',
      ['Pinhais tornou-se distrito de Piraquara em 1964 e município em 1992.','Piraquara tornou-se distrito de Pinhais em 1964 e município em 1992.','Pinhais separou-se de Piraquara em 1929, quando este recuperou o nome.','Pinhais e Piraquara foram fundidos no município de Deodoro em 1890.'],
      ['O IBGE registra a criação do distrito em 1964 e o desmembramento em 1992.','A relação administrativa foi invertida: Pinhais era distrito de Piraquara.','A mudança de nome de Piraquara em 1929 não corresponde à emancipação de Pinhais.','Deodoro foi a denominação histórica de Piraquara, não resultado dessa fusão.']],
    ['CG02','A orientação por pontos cardeais ajuda a ler mapas municipais. Qual município limita Piraquara a leste, na direção da Serra do Mar?',
      ['Morretes.','Pinhais.','Quatro Barras.','São José dos Pinhais.'],
      ['Morretes está a leste, conforme o perfil geográfico da Prefeitura.','Pinhais aparece a oeste de Piraquara.','Quatro Barras fica ao norte.','São José dos Pinhais é o município limítrofe ao sul.']],
    ['CG02','Qual par corresponde a Áreas de Proteção Ambiental presentes em Piraquara e relacionadas à gestão dos mananciais?',
      ['APA do Piraquara e APA do Iraí.','APA do Iguaçu e APA da Baía de Guaratuba.','APA de Guaraqueçaba e APA de Ponta Grossa.','APA da Escarpa Devoniana e APA de Guaratuba.'],
      ['A Secretaria Municipal de Meio Ambiente identifica as APAs do Piraquara e do Iraí no território local.','Essas denominações não correspondem ao par de APAs locais indicado na fonte.','Guaraqueçaba e Ponta Grossa não formam o par de APAs de mananciais informado para Piraquara.','Não são as duas APAs locais de mananciais identificadas pela Prefeitura.']],
    ['CG02','A expressão “Berço das Águas”, associada a Piraquara, remete particularmente a qual relação hidrográfica?',
      ['Presença de mananciais e nascentes associadas ao Rio Iguaçu.','Formação do curso principal do Rio Tibagi no centro da cidade.','Desembocadura do Rio Paraná na zona de divisa municipal.','Contato direto do município com o estuário do Rio Paranapanema.'],
      ['As fontes municipais associam as nascentes do Iguaçu e os mananciais à identidade ambiental da cidade.','O Tibagi não é o rio associado ao epíteto local.','Piraquara está na Região Metropolitana de Curitiba, não na foz do Rio Paraná.','O Paranapanema não explica o título conferido ao município.']],
    ['CG02','Dois documentos de épocas distintas atribuem percentuais diferentes de abastecimento metropolitano aos mananciais de Piraquara. Qual procedimento é mais adequado ao estudar esses dados?',
      ['Verificar ano, fonte e critério de medição antes de comparar.','Calcular a média aritmética dos percentuais e tratá-la como oficial.','Adotar sempre o percentual maior, por representar a melhor proteção.','Substituir os percentuais pela proporção da área urbana municipal.'],
      ['A comparação exige saber o período e o que exatamente cada indicador mede.','A média de números com metodologias distintas não produz um valor oficial.','A magnitude não comprova atualidade ou qualidade de uma medição.','Área urbana e participação no abastecimento são indicadores diferentes.']],
    ['CG02','Uma área urbanizada próxima a um manancial apresenta expansão de superfícies impermeáveis e lançamento irregular de efluentes. Qual intervenção enfrenta as duas questões?',
      ['Melhorar o saneamento e planejar drenagem e ocupação do solo.','Ampliar a drenagem viária sem avaliar a destinação dos efluentes.','Instalar redes de esgoto e dispensar o controle da impermeabilização.','Regularizar edificações sem examinar pressões sobre a bacia hídrica.'],
      ['A gestão integrada do saneamento e do território reduz poluição e riscos hidrológicos.','A drenagem não resolve, por si só, o lançamento irregular de efluentes.','O saneamento melhora a qualidade da água, mas não substitui o planejamento do solo.','Regularização sem avaliação da bacia pode manter os impactos ambientais.']],
    ['CG03','Qual valor corresponde especificamente à população de Piraquara apurada no Censo Demográfico de 2022?',
      ['118.730 moradores.','93.207 moradores.','113.036 moradores.','129.035 moradores.'],
      ['O total de 118.730 é o resultado do Censo 2022.','93.207 é o total do Censo 2010 apresentado no diagnóstico municipal.','113.036 foi uma estimativa de 2019 citada no diagnóstico, não o Censo 2022.','129.035 é apresentado pelo IBGE como estimativa de 2026, não como população recenseada em 2022.']],
    ['CG03','O IBGE indica densidade demográfica de 522,94 hab./km² para Piraquara em 2022. O que esse indicador expressa?',
      ['Relação entre população residente e área territorial.','Quantidade de domicílios urbanos por quilômetro de ruas.','Percentual anual de crescimento da população residente.','Relação entre a renda municipal e o número de habitantes.'],
      ['A densidade corresponde à razão entre população e superfície territorial.','Trata-se de uma possível medida de domicílios, não de densidade populacional.','Crescimento demográfico compara populações em períodos distintos.','Essa relação se aproxima de um indicador econômico per capita.']],
    ['CG03','Uma proposta de desenvolvimento local valoriza a cultura trentina, o turismo rural e a preservação dos mananciais. Qual interpretação melhor explica essa estratégia?',
      ['Diversifica atividades econômicas articulando patrimônio e conservação ambiental.','Substitui a proteção ambiental pelo crescimento de atividades turísticas.','Reduz as atividades rurais ao uso exclusivamente residencial do território.','Considera o turismo independente das características naturais e culturais.'],
      ['O turismo sustentável aproveita atributos locais e precisa considerar os limites ambientais.','O potencial econômico não elimina as responsabilidades de conservação.','Turismo rural pode valorizar a produção, a paisagem e atividades tradicionais.','Os recursos naturais e culturais são precisamente parte do atrativo local.']],
    ['CG03','Em uma pesquisa escolar, os estudantes querem relacionar instrumentos de trabalho ferroviário e relatos de antigos trabalhadores à memória da cidade. Qual equipamento cultural é mais diretamente associado a esse tema?',
      ['Centro de Memória Ferroviária João Tesserolli Júnior.','Casa da Memória Manoel Alves Pereira.','Igreja Matriz do Senhor Bom Jesus dos Passos.','Reservatório do Carvalho, nos Mananciais da Serra.'],
      ['O centro tem foco na preservação e divulgação da memória ferroviária.','A Casa da Memória preserva a história sociocultural municipal em sentido mais amplo.','A igreja é um patrimônio religioso e arquitetônico, não um centro ferroviário.','O reservatório é um patrimônio ligado à história do abastecimento de água.']],
    ['CG03','Segundo a cronologia do Plano Municipal de Política Cultural, qual acontecimento ocorreu em 1892, após a instalação municipal?',
      ['Realização das primeiras eleições municipais.','Elevação do povoado à condição de freguesia.','Instalação da comissão governativa municipal.','Inauguração do Reservatório do Carvalho.'],
      ['A cronologia municipal registra em 1892 as primeiras eleições, com camaristas e prefeito eleitos.','A freguesia data de 1885.','A instalação da comissão governativa está ligada à instalação de janeiro de 1890.','A inauguração do reservatório ocorreu em 1908.']]
  ];
  const keys=[2,0,3,1,3,1,2,0,0,2,1,3,1,0,3,2,2,3,0,1];
  const questions=rows.map(([code,stem,options,comments],i)=>{
    const key=keys[i], order=[1,2,3];order.splice(key,0,0);
    return {number:i+1,stem,options:order.map(j=>options[j]),comments:order.map(j=>comments[j]),key,code,subject:'Conhecimentos Gerais',weight:1,qid:'piraquara-'+(i+1),sid:null};
  });
  return {sources,timeline,facts,reminders,questions,videoId:'YUoTohQPSGg',verified:'22/11/2026'};
})();
