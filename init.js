			// Teclando enter end
			// substituir a letra
				// document.addEventListener("keyup", function(e){
					// if(e.key!='Enter'){
						// funcaoTeste = document.getElementById("entry")
						// funcaoTesteIsFocused = (document.activeElement === funcaoTeste)
						// if(funcaoTesteIsFocused === true){
							// document.getElementById("entry").value = e.key
						// }
					// }
				// });
			// substituir a letra end
			// Marcador de tempo
				// function esperaFinal(ms){
					// let ini = new Date().getTime()
					 // let fim=0;
					 // while((fim-ini)<ms){
						 // fim = new Date().getTime()
					// }
				// }
			// Marcador de tempo end
		//MOBILE
			//Resize to mobile
				// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
				let vh = window.innerHeight * 0.01
				// Then we set the value in the --vh custom property to the root of the document
				document.documentElement.style.setProperty('--vh', `${vh}px`)

				// We listen to the resize event
				window.addEventListener('resize', function(){
				  // We execute the same script as before
				  let vh = window.innerHeight * 0.01;
				  document.documentElement.style.setProperty('--vh', `${vh}px`);
				});
			//Resize to mobile end
		//Script 
			// Teclando enter
				let pvl = 0
				let pd = 0
				document.addEventListener("keyup", function(e){
					if(e.key === 'Enter') {
						pvl = document.getElementById("palavra").value.length
						pd = document.getElementById("palavra").disabled
						if(pd===false&&pvl!=0) {
							btn = document.getElementById("sender");			
							btn.click();
						} else {
							pvl = document.getElementById("entry").value.length
							if(pvl != 0) {
								btn = document.getElementById("verifier");			
								btn.click();
							}
						}
					}
				});
			// Teclando end
		let p=""
		let t=6
		let w=0
		let e=""
		let c=0
		let re=""
		let result=[]		
		let rd=50
		let hist = ""
		
		let animal		= ["abelha", "abutre", "ácaro", "águia", "albatroz", "alce", "alpaca", "anaconda", "anchova", "andorinha", "anta", "antílope", "aranha", "arara", "asno", "atum", "avestruz", "babuíno", "bacalhau", "bacuri", "badejo", "bagre", "baiacu", "baleia", "barata", "barbo", "barracuda", "beija-flor", "besouro", "bem-te-vi", "bezerro", "bicho-da-seda", "bisonte", "bode", "boi", "borboleta", "boto", "búfalo", "burro", "cabra", "cachalote", "cachorro", "cágado", "camaleão", "camarão", "camelo", "camundongo", "canário", "canguru", "capivara", "caracol", "caranguejo", "carneiro", "carrapato", "cascavel", "castor", "cavalo", "cavalo-marinho", "cegonha", "centopeia", "chimpanzé", "chinchila", "chita", "cigarra", "cisne", "coala", "cobra", "codorna", "coelho", "coiote", "coruja", "corvo", "crocodilo", "cupim", "cutia", "damão", "dançador", "degolado", "degu", "diablotim", "diabo-da-tasmânia", "dingo", "dinossauro", "dodô", "doninha", "dourado", "dragão-de-komodo", "dragão-voador", "dromedário", "égua", "elefante", "elefante-marinho", "ema", "enchova", "enferrujado", "enguia", "enho", "escaravelho", "escorpião", "escrevedeira", "esmerilhão", "espadarte", "esponja", "esquilo", "estorninho", "estrela-do-mar", "esturjão", "faisão", "falcão", "ferreirinho", "flamingo", "flautim", "foca", "formiga", "fossa", "fraca-da-guiné", "frango-d'água", "freirinha", "fuinha", "furão", "gafanhoto", "gaivota", "galinha", "galo", "gambá", "gamo", "ganso", "garça", "garoupa", "gato", "gavião", "gazela", "geco", "gerbo", "gibão", "girafa", "girino", "gnu", "golfinho", "gorila", "gralha", "grifo", "grilo", "grou", "guará", "guaxinim", "hadoque", "hamster", "harpia", "hiena", "hipopótamo", "hírax", "iaque", "íbex", "íbis", "iguana", "iguanara", "impala", "indicador", "indri", "inhacoso", "inhala", "inhambu", "irapuã", "irara", "iratim", "itapema", "jabiru", "jabuti", "jaçanã", "jacaré", "jacu", "jacupará", "jaguar", "jamanta", "jararaca", "javali", "jegue", "jiboia", "joaninha", "joão-de-barro", "jumento", "kakapo", "kea", "kinguio", "kiwi", "koala", "kookaburra", "kowari", "krill", "kudu", "lacraia", "lagarta", "lagartixa", "lagarto", "lagosta", "lampreia", "lavadeira", "lavagante", "leão", "leão-marinho", "lebre", "lêmure", "leopardo", "lesma", "lhama", "libélula", "lince", "linguado", "lobo", "lombriga", "lontra", "lula", "macaco", "mamute", "manatim", "mandril", "mangangá", "maracanã", "marimbondo", "mariposa", "marisco", "marmota", "marreco", "marta", "massarongo", "medusa", "melro", "mergulhão", "merluza", "mexilhão", "mico", "milhafre", "mineirinho", "minhoca", "mocho", "mono", "morcego", "moreia", "morsa", "mosca", "mosquito", "muçurana", "mula", "musaranho", "naja", "nambu", "nandaia", "narceja", "narval", "náutilo", "negrinho", "neon", "nhacundá", "nhandiá", "niala", "niquim", "noitibó", "numbat", "nútria", "ocapi", "olho-de-boi", "onça", "orangotango", "orca", "órix", "ornitorrinco", "osga", "ostra", "otária", "ouriço", "ouriço-do-mar", "ovelha", "panda", "pantera", "papagaio", "pardal", "pássaro", "pato", "pavão", "peixe", "peixe-boi", "pelicano", "percevejo", "perereca", "periquito", "pernilongo", "peru", "pescada", "pica-pau", "pinguim", "piolho", "piranha", "pirarucu", "polvo", "pombo", "pônei", "porco", "porco-espinho", "porquinho-da-índia", "preá", "preguiça", "pulga", "quati", "quatimirim", "quatipuru", "quebra-nozes", "quebra-ossos", "queixada", "quem-te-vestiu", "quero-quero", "quetzal", "quiriquiri", "rã", "rabudinho", "raia", "raposa", "ratazana", "rato", "rêmora", "rena", "rendeira", "rinoceronte", "robalo", "rouxinol", "sabiá", "sagui", "salamandra", "salmão", "sanguessuga", "sapo", "sardão", "sardinha", "saúva", "seriema", "serpente", "siri", "suçuarana", "sucuri", "suiriri", "suricate", "surubi", "surucucu", "tainha", "tamanduá", "tamboril", "tapir", "tarântula", "tartaruga", "tatu", "tatuí", "tentilhão", "tetra", "texugo", "tico-tico", "tigre", "tilápia", "tordo", "tororó", "toupeira", "touro", "tritão", "truta", "tubarão", "tucano", "tucuxi", "uacari", "unau", "unha-longa", "unicórnio", "urso panda", "urso", "uru", "urubu", "urutaurana", "urutu", "vaca", "vaca-marinha", "vaga-lume", "veado", "verdilhão", "verdinho", "vespa", "víbora", "vieira", "vison", "vitela", "viúva", "viúva-negra", "zabelê", "zangão", "zaragateiro", "zarro", "zebra", "zebu", "zidedê", "zombeteiro", "zorrilho"]
		let alimento	= ["Abóbora", "Abobrinha", "Aipim", "Alho", "Amêndoa", "Amendoim", "Andu", "Arachachá", "Arroz", "Aveia", "Avelã", "Azeitona", "Abóbora", "Açafrão", "Açafrão", "Acelga", "Agrião", "Aipo", "Alcachofra", "Alcaparra", "Alecrim", "Alface", "Alfafa", "Alfavaca", "Alho-poró", "Almeirão", "Aspargo", "Azedinha", "Baroa", "Batata", "Batata-doce", "Berdana", "Berinjela", "Beterraba", "Beldroega", "Berdana", "Bertalha", "Bredo", "Brócolis", "Cará", "Cebola", "Cenoura", "Centeio", "Cevada", "Chalota", "Chia", "Chuchu", "Cumaru", "Cambuquira", "Capeba", "Capuchinha", "Caruru", "Cebolinha", "Celósia", "Chicória", "Coentro", "Comelina", "Couve", "Couve-de-bruxelas", "Ervilha", "Echalota", "Embaúba", "Endívia", "Erva-cidreira", "Erva-doce", "Erva-mate", "Escarola", "Espinafre", "Fava", "Feijão", "Funcho", "Gengibre", "Gergelim", "Hibisco", "Hortelã", "Inhame", "Jalapeño", "Jicama", "Jiló", "Jasmim-manga", "Jaca", "Labaca", "Lentilha", "Linhaça", "Louro", "Macassá", "Malagueta", "Malte", "Mandioca", "Maxixe", "Milho", "Mitsubá", "Manjericão", "Manjerona", "Mostarda", "Nabo", "Noz", "Oliva", "Ora-pro-nobis", "Orégano", "Palmito", "Pepino", "Pequi", "Pimenta", "Pimentão", "Pinhão", "Pistache", "Palma", "Picão", "Quiabo", "Quinoa", "Quina", "Rabanete", "Radicchio", "Repolho", "Rúcula", "Ruibarbo", "Soja", "Salsa", "Salsão", "Sálvia", "Serralha", "Taioba", "Tingensai", "Tomilho", "Trapoeraba", "Taro", "Tomate", "Tonka", "Trigo", "Tupinambo", "Urucum", "Urtiga", "abacaxi", "abacate", "amora", "banana", "caju", "carambola", "cacau", "damasco", "figo", "framboesa", "goiaba", "graviola", "groselha", "jambo", "jabuticaba", "kiwi", "laranja", "limão", "lichia", "mamão", "melancia", "marmelo", "nectarina", "pera", "pêssego", "physalis", "quina", "romã", "seriguela", "tâmara", "tamarindo", "tangerina", "umbu", "uva"]
		let objeto		= ["Abajur", "abridor", "açucareiro", "adaga", "agulha", "alfinete", "algema", "alicate", "almofada", "âncora", "andador", "anel", "antena", "anzol", "apagador", "apito", "apontador", "aquecedor", "arco", "aro", "aspirador", "azulejo", "Bacia", "balança", "balão", "banco", "bandeira", "batom", "baú", "bengala", "berço", "berimbau", "bexiga", "bicicleta", "bidê", "bigorna", "binóculo", "biruta", "bisturi", "boia", "bola", "boneca", "borracha", "bota", "botão", "brinco", "bule", "bumerangue", "Cabide", "cadeado", "cadeira", "caderno", "cajado", "calça", "cálice", "camisa", "camiseta", "caneta", "canivete", "capa", "capacete", "carimbo", "castiçal", "cata-vento", "CD", "celular", "chave", "chicote", "chinelo", "chupeta", "clipe", "colar", "colchão", "colher", "copo", "Dado", "dardo", "dedal", "dentadura", "desentupidor", "desfibrilador", "desodorante", "despertador", "detergente", "diadema", "diapasão", "diário", "dicionário", "difusor", "dinamite", "disco", "disquete", "Edredom", "elástico", "envelope", "enxada", "escada", "escorredor", "escova", "escudo", "escumadeira", "esmalte", "espada", "espanador", "espelho", "esponja", "espremedor", "esquadro", "estátua", "esteira", "estetoscópio", "estilete", "estojo", "extintor", "Faca", "facão", "farol", "fax", "ferradura", "fichário", "filmadora", "filtro", "fio", "fita", "fivela", "flauta", "flecha", "fogão", "foguete", "foice", "folha", "fone", "frasco", "freezer", "frigideira", "fruteira", "funil", "furadeira", "Gaiola", "gaita", "gancho", "gangorra", "garfo", "gargantilha", "garrafa", "gaveta", "geladeira", "gorro", "gramofone", "grampeador", "grampo", "granada", "gravata", "grelha", "grinalda", "guarda-chuva", "guarda-sol", "guilhotina", "guitarra", "Haltere", "harpa", "haste", "hélice", "helicóptero", "hidrante", "hidratante", "hidroavião", "hidrômetro", "holofote", "impressora", "inalador", "incenso", "ingresso", "inseticida", "interfone", "interruptor", "ioiô", "isca", "isopor", "isqueiro", "Jaleco", "janela", "jangada", "jaqueta", "jardineira", "jarra", "jato", "jaula", "joelheira", "jogo", "joia", "jornal", "joystick", "Lâmina", "lâmpada", "lampião", "lança", "lancheira", "lantejoula", "lanterna", "lápis", "lapiseira", "lata", "leiteira", "leme", "lenço", "lençol", "leque", "liquidificador", "livro", "lixa", "lixeira", "lousa", "luminária", "luneta", "lustre", "luva", "Maçaneta", "maçarico", "machado", "maiô", "mala", "mamadeira", "manequim", "mangueira", "manivela", "maquiagem", "máquina", "marreta", "martelo", "máscara", "medalha", "megafone", "meia", "microfone", "microscópio", "mochila", "mola", "Nadadeira", "narguilé", "navalha", "nave", "navio", "nebulizador", "notebook", "novelo", "Óculos", "ombreira", "orelhão", "paliteiro", "pandeiro", "panela", "pano", "papel", "parafuso", "paraquedas", "pedra", "pen drive", "peneira", "pente", "piano", "pião", "picareta", "pilão", "pinça", "pincel", "pingente", "pistola", "placa", "porta-retrato", "pote", "prancha", "prateleira", "prato", "pulseira", "Quadriciclo", "quadro", "quebra-cabeça", "queijeira", "Rádio", "ralador", "ralo", "raquete", "ratoeira", "rede", "régua", "relógio", "remo", "retrovisor", "revista", "revólver", "rímel", "roda", "rodo", "rolamento", "roleta", "rolha", "rolo", "roteador", "Sabonete", "saca-rolhas", "saco", "sacola", "saia", "saleiro", "sandália", "sanfona", "sapato", "saxofone", "scanner", "secador", "seringa", "serpentina", "serrote", "short", "sino", "sirene", "skate", "sofá", "sombrinha", "spray", "Tábua", "tabuleiro", "taça", "talher", "tamanco", "tambor", "tampa", "tatame", "teclado", "telefone", "telescópio", "televisão", "telha", "tênis", "termômetro", "tesoura", "tiara", "tigela", "tijolo", "touca", "trampolim", "travesseiro", "trena", "troféu", "Ukulele", "ultraleve", "umidificador", "uniforme", "urna", "Válvula", "vaporizador", "vara", "varal", "vareta", "vaso", "vassoura", "vela", "velocímetro", "ventilador", "vidro", "viola", "violão", "violino", "violoncelo", "viseira", "vitrola", "volante", "Walkie-talkie", "walkman", "webcam", "Xadrez", "xale", "xampu", "xarope", "xícara", "xilofone", "xilogravura", "Zabumba", "zarabatana", "zíper"]
		let cor 		= ["Amarelo", "Âmbar", "Anil", "Azul", "Bege", "Bordô", "Branco", "Bronze", "Cáqui", "Carmesim", "Carmim", "Castanho", "Ciano ", "Cinza", "Cobre", "Coral", "Creme", "Dourado", "Escarlate", "Esmeralda", "Ferrugem", "Fúcsia", "Gelo", "Índigo", "Jade", "Laranja", "Lavanda", "Lilás ", "Limão", "Magenta", "Marfim", "Marrom", "Oliva", "Ouro", "Prata", "Preto", "Púrpura", "Rosa", "Roxo", "Rubro", "Sépia", "Terracota", "Turquesa", "Verde", "Vermelho", "Vinho", "Violeta"]
		let cep			= ["América", "Africa", "Asia", "Europa", "Oceania", "Ártico", "Afeganistão", "África do Sul", "Albânia", "Alemanha", "Andorra", "Angola", "Antiga e Barbuda", "Arábia Saudita", "Argélia", "Argentina", "Arménia", "Austrália", "Áustria", "Azerbaijão", "Bahamas", "Bangladexe", "Barbados", "Barém", "Bélgica", "Belize", "Benim", "Bielorrússia", "Bolívia", "Bósnia e Herzegovina", "Botsuana", "Brasil", "Brunei", "Bulgária", "Burquina Faso", "Burúndi", "Butão", "Cabo Verde", "Camarões", "Camboja", "Canadá", "Catar", "Cazaquistão", "Chade", "Chile", "China", "Chipre", "Colômbia", "Comores", "Congo-Brazzaville", "Coreia do Norte", "Coreia do Sul", "Cosovo", "Costa do Marfim", "Costa Rica", "Croácia", "Cuaite", "Cuba", "Dinamarca", "Dominica", "Egito", "Emirados Árabes Unidos", "Equador", "Eritreia", "Eslováquia", "Eslovénia", "Espanha", "Essuatíni", "Estado da Palestina", "Estados Unidos", "Estónia", "Etiópia", "Fiji", "Filipinas", "Finlândia", "França", "Gabão", "Gâmbia", "Gana", "Geórgia", "Granada", "Grécia", "Guatemala", "Guiana", "Guiné", "Guiné Equatorial", "Guiné-Bissau", "Haiti", "Honduras", "Hungria", "Iémen", "Ilhas Marechal", "Índia", "Indonésia", "Irão", "Iraque", "Irlanda", "Islândia", "Israel", "Itália", "Jamaica", "Japão", "Jibuti", "Jordânia", "Laus", "Lesoto", "Letónia", "Líbano", "Libéria", "Líbia", "Listenstaine", "Lituânia", "Luxemburgo", "Macedónia do Norte", "Madagáscar", "Malásia", "Maláui", "Maldivas", "Mali", "Malta", "Marrocos", "Maurícia", "Mauritânia", "México", "Mianmar", "Micronésia", "Moçambique", "Moldávia", "Mónaco", "Mongólia", "Montenegro", "Namíbia", "Nauru", "Nepal", "Nicarágua", "Níger", "Nigéria", "Noruega", "Nova Zelândia", "Omã", "Países Baixos", "Palau", "Panamá", "Papua Nova Guiné", "Paquistão", "Paraguai", "Peru", "Polónia", "Portugal", "Quénia", "Quirguistão", "Quiribáti", "Reino Unido", "República Centro-Africana", "República Checa", "República Democrática do Congo", "República Dominicana", "Roménia", "Ruanda", "Rússia", "Salomão", "Salvador", "Samoa", "Santa Lúcia", "São Cristóvão e Neves", "São Marinho", "São Tomé e Príncipe", "São Vicente e Granadinas", "Seicheles", "Senegal", "Serra Leoa", "Sérvia", "Singapura", "Síria", "Somália", "Sri Lanca", "Sudão", "Sudão do Sul", "Suécia", "Suíça", "Suriname", "Tailândia", "Taiuã", "Tajiquistão", "Tanzânia", "Timor-Leste", "Togo", "Tonga", "Trindade e Tobago", "Tunísia", "Turcomenistão", "Turquia", "Tuvalu", "Ucrânia", "Uganda", "Uruguai", "Usbequistão", "Vanuatu", "Vaticano", "Venezuela", "Vietname", "Zâmbia", "Zimbábue", "Cabul", "Pretória", "Tirana", "Berlim", "Andorra-a-Velha", "Luanda", "São João", "Riade", "Argel", "Buenos Aires", "Erevã", "Camberra", "Viena", "Bacu", "Nassau", "Daca", "Bridgetown", "Manama", "Bruxelas", "Belmopã", "Porto Novo", "Minsque", "Sucre", "Saraievo", "Gaborone", "Brasília", "Bandar Seri Begauã", "Sófia", "Uagadugu", "Bujumbura", "Timbu", "Praia", "Iaundé", "Pnom Pene", "Otava", "Doa", "Astana", "Jamena", "Santiago", "Pequim", "Nicósia", "Bogotá", "Moroni", "Brazavile", "Pionguiangue", "Seul", "Pristina", "Iamussucro", "São José", "Zagrebe", "Cidade do Cuaite", "Havana", "Copenhaga", "Roseau", "Cairo", "Abu Dabi", "Quito", "Asmara", "Bratislava", "Liubliana", "Madrid", "Lobamba", "Jerusalém Oriental", "Washington, D.C.", "Talim", "Adis Abeba", "Suva", "Manila", "Helsínquia", "Paris", "Libreville", "Banjul", "Acra", "Tebilíssi", "São Jorge", "Atenas", "Cidade da Guatemala", "Georgetown", "Conacri", "Malabo", "Bissau", "Porto Príncipe", "Tegucigalpa", "Budapeste", "Saná", "Majuro", "Nova Déli", "Jacarta", "Teerão", "Bagdade", "Dublim", "Reiquiavique", "Jerusalém", "Roma", "Kingston", "Tóquio", "Jibuti", "Amã", "Vienciana", "Maseru", "Riga", "Beirute", "Monróvia", "Trípoli", "Vaduz", "Vílnius", "Luxemburgo", "Escópia", "Antananarivo", "Cuala Lumpur", "Lilôngue", "Malé", "Bamaco", "Valeta", "Rebate", "Porto Luís", "Nuaquechote", "Cidade do México", "Nepiedó", "Paliquir", "Maputo", "Quixinau", "Mónaco", "Ulã Bator", "Podgoritsa", "Vinduque", "Iarém", "Catmandu", "Manágua", "Niamei", "Abuja", "Oslo", "Wellington", "Mascate", "Amesterdão", "Ngerulmud", "Cidade do Panamá", "Porto Moresby", "Islamabade", "Assunção", "Lima", "Varsóvia", "Lisboa", "Nairóbi", "Bisqueque", "Taraua do Sul", "Londres", "Bangui", "Praga", "Quinxassa", "São Domingos", "Bucareste", "Quigali", "Moscovo", "Honiara", "São Salvador", "Apia", "Castries", "Basseterre", "São Marinho", "São Tomé", "Kingstown", "Vitória", "Dacar", "Freetown", "Belgrado", "Singapura", "Damasco", "Mogadíscio", "Sri Jaiavardenapura-Cota", "Cartum", "Juba", "Estocolmo", "Berna", "Paramaribo", "Banguecoque", "Taipé", "Duchambé", "Dodoma", "Díli", "Lomé", "Nucualofa", "Porto de Espanha", "Tunes", "Asgabate", "Ancara", "Funafuti", "Quieve", "Campala", "Montevideu", "Tasquente", "Porto Vila", "Vaticano", "Caracas", "Hanói", "Lusaca", "Harare", "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceara", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins", "Rio Branco", "Maceió", "Macapá", "Manaus", "Salvador", "Fortaleza", "Brasília", "Vitória", "Goiânia", "São Luiz", "Cuiabá", "Campo Grande", "Belo Horizonte", "Belém", "João Pessoa", "Curitiba", "Recife", "Terezina", "Rio de Janeiro", "Natal", "Porto Alegre", "Porto Velho", "Boa Vista", "Florianópolis", "São Paulo", "Aracajú", "Palmas"]
		
		let dicaSingle = [animal, alimento, objeto, cor, cep]
		let dicaNumber = ["Animal","Alimento", "Objeto", "Cor", "Cidade/Estado/País/Continente"]
		
			// Single Player
			function singlePlayer(){
				document.getElementById("single").remove()
				document.getElementById("dual").remove()
				ds = Math.floor(Math.random() * dicaSingle.length)
				sp = dicaSingle[ds]
				spp = Math.floor(Math.random() * sp.length)
				d()
				di.value = dicaNumber[ds]
				p = sp[spp].toUpperCase()
				p = p.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
				document.getElementById("dica").style.display = "flex"
				addLinha();
			}
			// Single Player End
			// Dual Player
			function selPalavra(){
				document.getElementById("single").remove()
				document.getElementById("dual").remove()
				document.getElementById("palavra").style.display = "block"
				document.getElementById("sender").style.display = "block"
				document.getElementById("dica").style.display = "flex"
				}
			function dualPlayer(){
				p = document.getElementById("palavra").value.toUpperCase()
				p = p.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
				addLinha();
			}
			// Dual Player






		function resizeDica(){
			console.log(rd)
			console.log(document.getElementById("di").value.length)
			if (document.getElementById("di").value.length > 35) {
				rd++
			}
			document.getElementById("di").style = "width: calc(var(--vh, 1vh) * "+rd+");"
		}

		function Trim(str){
                return str.replace(/^\s+|\s+$/g,"");
            }

		function addLinha(){
				for (i=0;i<p.length;i++) {
					if(p[i]===" "){
						let cte = '<div class="csr" style="background-color: transparent;border-style: none"></div>'
						document.getElementById("linha").innerHTML += cte;
					}else if(p[i]==="-"){
						let cte = '<div class ="csr" type="text" maxlength="1" name="" style="border-style: none">-</div>';
						document.getElementById("linha").innerHTML += cte;
					}else if(p[i]==="'"){
						let cte = '<div class ="csr" type="text" maxlength="1" name="" style="border-style: none">'+"'"+'</div>';
						document.getElementById("linha").innerHTML += cte;
					}else{
						let cte = '<input class ="csr" id="'+c+'" type="text" maxlength="1" name="" disabled="true">';
						document.getElementById("linha").innerHTML += cte;
						c++
					}
				}

			document.getElementById("entry").style.display 		= "block"
			document.getElementById("verifier").style.display 	= "block"
			document.getElementById("inf").style.display 		= "flex"
			document.getElementById("dica").disabled 			= true;
			document.getElementById("palavra").disabled 		= true;
			document.getElementById("palavra").value 			= "*****"
			document.getElementById("sender").remove()
			document.getElementById("tentativas").classList.add("wrong")

			// try{tc.style.width = tam}catch{}
			// document.body.style.transform = scale;
		};

		function resultado(){
				p1=p.split(" ").join("")
				p2=p1.split("-").join("")
				pl=p2.split("'").join("")
				rst(); 
				re=result.join("")
			let fT1=re.split('').sort().join(''); 
			let fT2=pl.split('').sort().join('');
			let fT3=(fT1===fT2);
			let end=""
// console.log("result: "+result)
// console.log("re: "+re)

			for (i=0;i<pl.length;i++) {
				if(fT3===true){ 
				try{
					document.getElementById("entry").style.display = "none"
					document.getElementById("verifier").style.display = "none"
				}catch{}
console.log("vencedor")
				document.getElementById("ender").style.display = "flex"
				}
			}
			try{document.getElementById("entry").value = ""}catch{}
			if(t<=0){ 
console.log("Suas tentativas acabaram")
				document.getElementById("ender").style.display = "flex"
				document.getElementById("entry").remove()
				document.getElementById("verifier").remove()
				for (let i=0;i<p.length;i++) {
					if(p[i]===" "){
						setTimeout( function() {
							resultadoFinal('<div class="casa" id="vazio2"style="border-style: none;background: transparent"></div>')
						}, i*500 )
						function resultadoFinal(pff) {
						document.getElementById("linha2").innerHTML += pff
						}
					}else if(p[i]==="-"){
						setTimeout( function() {
							resultadoFinal('<input class="casa" style="border: none;background: transparent;max-height: calc(var(--vh, 1vh) * 10)" disabled="true" value="-">')
						}, i*500 )
						function resultadoFinal(pff) {
						document.getElementById("linha2").innerHTML += pff
						}						
					}else if(p[i]==="'"){
						setTimeout( function() {
							resultadoFinal('<input class="casa" style="border: none;background: transparent;max-height: calc(var(--vh, 1vh) * 10)" disabled="true" value="'+"'"+'">')
						}, i*500 )
						function resultadoFinal(pff) {
						document.getElementById("linha2").innerHTML += pff
						}						
					}else{
						setTimeout( function() {
							resultadoFinal('<input class="casa" style="background: #70160e;max-height: calc(var(--vh, 1vh) * 10)" disabled="true" value="'+p[i]+'">')
						}, i*500 )
						function resultadoFinal(pff) {
						document.getElementById("linha2").innerHTML += pff
						}
					}
				}
			// document.body.style.transform = scale;
			}
			try{document.getElementById("tentativas").value = t}catch{console.log("Fim de jogo")}
		}

			
	function rst(){
			let e = document.getElementById("entry").value.toUpperCase();
			e = e.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
			if(hist.includes(e)===false){
			hist = hist+e
			if (pl.includes(e)===true) {
				for (let i=0;i<pl.length;i++) {
					if(e===pl[i]){ 
						document.getElementById(i).value = e
					let cs = document.getElementById(i).value;
					result.push(cs);
					}
				}
			} else {
				if(e!=""){
				document.getElementById("linha3").innerHTML += '<input class ="wrong" id="w'+w+'" type="text" maxlength="1" name="" disabled="true" value="'+e+'">'
				w++
				t--}
			}
			}
// console.log("p: "+p)
	};
	
		function d(){
		document.getElementById("dica").removeAttribute("onclick")
		let dic = '<input class="dc" id="di" style="width: calc(var(--vh, 1vh) * '+rd+');" type="text" name="dica" placeholder="Digite a dica" onkeyup="resizeDica()">'
		document.getElementById("dica").innerHTML = dic
		// document.body.style.transform = scale;
		}

