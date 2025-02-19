import {AfterViewInit, Component, OnInit} from '@angular/core';
import {InventoryItemCategoryDTO, InventoryItemDTO, ItemSettingsControllerService} from "../../../api";

@Component({
  selector: 'app-item-mgmt',
  templateUrl: './item-mgmt.page.html',
  styleUrls: ['./item-mgmt.page.scss'],
})
export class ItemMgmtPage implements OnInit{
  items : InventoryItemDTO[] = [];
  itemCategories : InventoryItemCategoryDTO[] = [];

  inventoryItems: { [key: string]: string[] } = {
    "Strumentazione Medica": [
      "Sfigmomanometro",
      "Defibrillatore",
      "Monitor ECG",
      "Termometro Digitale",
      "Saturimetro"
    ],
    "Tecnologia": [
      "Laptop",
      "Smartphone",
      "Stampante 3D",
      "Router Wi-Fi",
      "Proiettore"
    ],
    "Materiale Scolastico": [
      "Zaino",
      "Quaderni",
      "Penna a sfera",
      "Gomma per cancellare",
      "Righello"
    ],
    "Materiale Umanitario": [
      "Coperte Termiche",
      "Kit di Primo Soccorso",
      "Tende da Campo",
      "Filtri per Acqua",
      "Generatore Portatile"
    ],
    "Materiale Ricreativo": [
      "Pallone da Calcio",
      "Chitarra Acustica",
      "Scacchiera",
      "Set di Carte",
      "Tavolo da Ping Pong"
    ]
  };

  constructor(private itemMgmtController: ItemSettingsControllerService) { }

  ngOnInit() {
    this.itemMgmtController.apiSettingsItemMgmtGet().subscribe(response => {
      this.items = response.items ?? [];
      this.itemCategories = response.categories ?? [];
    })

  }


  generateMockItem($event: any) {

    $event.stopPropagation();

    const generatedItems: InventoryItemDTO[] = [];
    let idCounter = 1;

    for (let i = 0; i < 15; i++) {
      const categoryKeys = Object.keys(this.inventoryItems);
      const randomCategory = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
      const categoryIndex = categoryKeys.indexOf(randomCategory) + 1; // ID starts from 1

      const itemName = this.inventoryItems[randomCategory][Math.floor(Math.random() * this.inventoryItems[randomCategory].length)];

      generatedItems.push(Object.assign({} as InventoryItemDTO, {
        id: idCounter++,
        name: itemName,
        itemCategory: Object.assign({} as InventoryItemCategoryDTO, { id: categoryIndex, name: randomCategory } as InventoryItemCategoryDTO)
      } as InventoryItemDTO));
    }


    generatedItems.forEach(item => {
      this.itemMgmtController.apiSettingsItemMgmtAddPost(item).subscribe(value => {
        console.log("Received response!!! ", value);
      });
    });
  }

  filterItems() {

  }
}
