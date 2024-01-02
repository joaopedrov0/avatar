// name = {
//     nome: 'nome',
//     range: [
//         >>> range in squares
//     ],
//     damage: [
//         >>> damage in strings
//     ],
//     learningComponents: '',
//     duration: '',
//     uses: '',
//     toHit: '',
//     castingTime: '',
//     description: '',
//     price: 'xp required',
//     purchased: {} or true,
//     upgrades: {
//         atribute: [level, price1, price2, price3...]
//     },
// }


class FireSkillTree {
    basicAttack = {
        name: 'Ataque Básico',
        range: [
            5,
            6,
            7,
            8,
            9,
        ],
        damage: [
            '1d8',
            '2d8',
            '3d8',
            '4d8',
            '5d8',
        ],
        learningComponents: 'Nenhum',
        duration: 'Instantânea',
        uses: 'Infinito',
        toHit: '1d20',
        castingTime: '1 ação',
        description: 'O dominador lança uma chama sobre o inimigo até 7,5 metros, causando 1d8 + MF de dano. A cada 1,5 metros (1 quadrado)  além do limite de distância seu ataque dará metade do dano arredondado para baixo com limite mínimo de um de dano.',
        price: '0',
        purchased: {damage: 0, range: 0},
        upgrades: {
            damage: [0, 1700, 2000, 2300, 2600],
            range: [0, 1800, 2100, 2400, 2700],
        },
    }
    fireBall = {
        name: 'Bola de Fogo',
        range: [
            7,
            8,
            9,
        ],
        damage: [
            '2d6',
            '3d6',
            '5d6',
            '7d6',
            '9d6',
        ],
        learningComponents: 'Nenhum',
        duration: 'Instantânea',
        uses: '3',
        toHit: '1d20',
        castingTime: '1 ação',
        description: 'Uma bola de fogo sairá de uma das mãos do dominador chegando até 10,5 metros, queimando o inimigo, causando 2d6 + MF de dano.',
        price: '600',
        purchased: {damage: 0, range: 0},
        upgrades: {
            damage: [0, 75, 150, 150, 150],
            range: [0, 150, 150],
        },
    }
    flamingKick = {
        name: 'Chute Flamejante',
        range: [
            3,
            4,
            5,
        ],
        damage: [
            '1d4',
            '3d4',
            '5d4',
            '4d8',
            '6d8',
        ],
        learningComponents: 'Nenhum',
        duration: 'Instantânea',
        uses: '2',
        toHit: '1d20',
        castingTime: '1 ação bônus',
        description: 'Com uma ação bônus, o dobrador no meio de suas ações faz um chute lateral causando 1d4 + MF nas pessoas que estiverem em sua frente em até 4,5 metros.',
        price: '400',
        purchased: {damage: 0, range: 0},
        upgrades: {
            damage: [0, 100, 100, 150, 200],
            range: [0, 150, 150],
        },
    }
    canalization = {
        name: 'Canalização',
        range: [
            8,
            9,
            10,
        ],
        damage: [
            '2d6 + 3d4 por ação adicional e base 4d6 + 2d4',
            '4d6 + 1d4 por ação adicional e base 6d6 + 4d4',
            '4d6 + 3d4 por ação adicional e base 4d6 + 3d4',
            '4d8 + 4d4 por ação adicional e base 6d8 + 4d4',
            '5d8 + 5d4 por ação adicional e base 5d8 + 5d4',
        ],
        learningComponents: 'Pergaminho ou aulas',
        duration: 'Instantânea',
        uses: '2',
        toHit: '1d20 + 3 + MF ou 1d20',
        castingTime: '2 ações (mínimo)',
        description: 'Canaliza a bola de fogo com as duas mãos, por meio de, inicialmente, duas ações, lançando uma bola de fogo com mais energia até 12 metros, causando 4d6 + 2d4 + MF em uma pessoa. A cada ação adicional que for utilizada, dará 2d6 + 3d4 por ação. Além disso, a partir da 3° ação utilizada, o dominador terá + 3 para acertar. Ataques recebidos durante a canalização a cancelam. É preciso ter visto o inimigo para utilizar este ataque.',
        price: '900',
        purchased: {damage: 0, range: 0},
        upgrades: {
            damage: [0, 175, 225, 150, 400],
            range: [0, 150, 150],
        },
    }

    //chat gpt part, revisar com atenção
    continuousFlame = {
        name: 'Chama Contínua',
        range: [6, 7, 8], // 6 quadrados = 9 metros
        damage: ['4d4', '6d4', '6d6', '8d8', '8d10'],
        learningComponents: 'Nenhum',
        duration: 'Instantânea',
        uses: 3,
        toHit: '1d20',
        castingTime: '1 ação',
        description:
          'O dobrador de fogo lança com uma das mãos uma labareda de fogo constante, de até 9 metros, causando 4d4 de dano e aplicando Feridas Dolorosas durante um turno após o recebimento do dano. Inimigos sob este efeito recebem + ⅓ do dano total que lhe foi causado por esta habilidade. Este efeito não se acumula.',
        price: 700,
        purchased: {damage: 0, range: 0},
        upgrades: {
          damage: [0, 100, 150, 350, 200],
          range: [0, 150, 150],
        },
    };
      
    fireWall = {
        name: 'Parede de Fogo',
        range: [5, 6, 7], // 5 quadrados = 7,5 metros
        damage: ['1MF' ,'2MF'],
        wallSize: [5, 6, 7, 8, 9],
        learningComponents: 'Nenhum',
        duration: '12 segundos, 2 turnos',
        uses: 1,
        toHit: '1d20',
        castingTime: '1 ação',
        description:'O dobrador, atira no chão diversas brasas interligadas, após isso ele aumenta o tamanho da mesma criando uma parede de fogo de no máximo 7,5 metros de distância com 2 metros de altura, ele poderá conjurar essa parede até 7,5 metros dele, caso precise, poderá se movimentar para completar o formato da parede. Caso alguém passe pela parede, ela causará dano nesta pessoa. Dominadores de água e de ar podem tentar apagar a parede com habilidades plausíveis ou ataques básicos. Esta habilidade dura dois turnos.',
        price: 700,
        purchased: {damage: 0, range: 0, wallSize: 0},
        upgrades: {
            damage: [0, 300],
            range: [0, 150, 150],
            wallSize: [0, 150, 150, 150, 150],
        },
    };
      
    burningDodge = {
        name: 'Desvio Ardente',
        range: [5, 6, 7], // 5 quadrados = 7,5 metros
        damage: ['1d4', '3d4', '6d4', '10d4'],
        learningComponents: 'Pergaminho, aulas',
        duration: 'Instantâneo',
        uses: 2,
        toHit: '1d20',
        castingTime: '1 reação',
        defender: ['1d20 + 3', '1d20 + 4', '1d20 + 5', '1d20 + 6'],
        price: 800,
        purchased: {damage: 0, range: 0, defender: 0},
        upgrades: {
            damage: [0, 100, 150, 200],
            range: [0, 150, 150],
            defender: [0, 150, 300, 450],
        },
        description:'Entre as ações de seus inimigos, utilizando uma reação, o dobrador poderá desviar de ataques com uma rasteira e ao mesmo tempo causar 1d4 de dano, em um cone com alcance máximo de 7,5 metros, com 4,5 metros como base do cone.',
    };
}