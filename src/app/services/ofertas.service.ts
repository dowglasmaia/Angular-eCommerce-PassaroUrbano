import { Oferta } from '../shared/oferta';
import { reject } from 'q';
import { resolve } from 'q';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class OfertaService {

  constructor(
    private http: HttpClient
  ) { }

  public ofertas: Oferta[] = [{
    id: 1,
    categoria: "restaurante",
    titulo: "Super Burger X520",
    descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
    anunciante: "Original Burger",
    valor: 99.90,
    destaque: true,
    imagens: [{ url: "/assets/ofertas/1/img1.jpg" }, { url: "/assets/ofertas/1/img2.jpg" }, { url: "/assets/ofertas/1/img3.jpg" }, { url: "/assets/ofertas/1/img4.jpg" }
    ]
  }, {
    id: 2,
    categoria: "restaurante",
    titulo: "Cozinha Mexicana",
    descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
    anunciante: "Mexicana",
    valor: 325.90,
    destaque: true,
    imagens: [{ url: "/assets/ofertas/2/img1.jpg" }, { url: "/assets/ofertas/2/img2.jpg" }, { url: "/assets/ofertas/2/img3.jpg" }, { url: "/assets/ofertas/2/img4.jpg" }
    ]

  }, {
    id: 4,
    categoria: "diversao",
    titulo: "Estância das águas",
    descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
    anunciante: "Estância das águas",
    valor: 31.90,
    destaque: true,
    imagens: [{ url: "/assets/ofertas/3/img1.jpg" }, { url: "/assets/ofertas/3/img2.jpg" }, { url: "/assets/ofertas/3/img3.jpg" }, { url: "/assets/ofertas/3/img4.jpg" }, { url: "/assets/ofertas/3/img5.jpg" }, { url: "/assets/ofertas/3/img6.jpg" }
    ]
  }, {
    id: 4,
    categoria: "diversao",
    titulo: "Estância das águas",
    descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
    anunciante: "Estância das águas",
    valor: 31.90,
    destaque: true,
    imagens: [{ url: "/assets/ofertas/3/img1.jpg" }, { url: "/assets/ofertas/3/img2.jpg" }, { url: "/assets/ofertas/3/img3.jpg" }, { url: "/assets/ofertas/3/img4.jpg" }, { url: "/assets/ofertas/3/img5.jpg" }, { url: "/assets/ofertas/3/img6.jpg" }
    ]
  }, {
    id: 4,
    categoria: "diversao",
    titulo: "Estância das águas",
    descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
    anunciante: "Estância das águas",
    valor: 31.90,
    destaque: true,
    imagens: [{ url: "/assets/ofertas/3/img1.jpg" }, { url: "/assets/ofertas/3/img2.jpg" }, { url: "/assets/ofertas/3/img3.jpg" }, { url: "/assets/ofertas/3/img4.jpg" }, { url: "/assets/ofertas/3/img5.jpg" }, { url: "/assets/ofertas/3/img6.jpg" }
    ]
  }, {
    id: 4,
    categoria: "diversao",
    titulo: "Estância das águas",
    descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
    anunciante: "Estância das águas",
    valor: 31.90,
    destaque: true,
    imagens: [{ url: "/assets/ofertas/3/img1.jpg" }, { url: "/assets/ofertas/3/img2.jpg" }, { url: "/assets/ofertas/3/img3.jpg" }, { url: "/assets/ofertas/3/img4.jpg" }, { url: "/assets/ofertas/3/img5.jpg" }, { url: "/assets/ofertas/3/img6.jpg" }
    ]
  }
  ];


  public getOfertas(): Array<Oferta> {
    return this.ofertas;
  }

  /* metodo com promise */
  public getOfertas2(): Promise<Array<Oferta>> {
    return new Promise((resolve, reject) => {
      //algum tipo de processamento, que ao finalizar, chama a funcção resolve ou rejected.

      console.log("Passou por aqui");

      let deu_serto = true;
      if (deu_serto) {
        setTimeout(() => resolve(this.ofertas), 3000)

      } else {
        reject({ codigo_error: 404, mensage_error: 'Servidor não encontrado!' })
      }
    })
      /* fazendo mais uma tratativa caso a promeça seja concluida - pode ser feito por exemplo,
         uma busca na basa de dados e  depois fazer mais uma compração com outro obj no banco de dados*/
      .then((ofertas: Oferta[]) => {
        console.log("01 Then")
        return ofertas;
      });

  }

}
