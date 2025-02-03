import {AfterViewInit, Component, OnInit} from '@angular/core';
import {InventoryItem, InventoryItemCategory, ItemMgmtControllerService} from "../../../api";
import Chart from 'chart.js/auto';
import {JoinRequestDto} from "../../../api/model/joinRequestDto";

@Component({
  selector: 'app-item-mgmt',
  templateUrl: './item-mgmt.page.html',
  styleUrls: ['./item-mgmt.page.scss'],
})
export class ItemMgmtPage implements OnInit{
  items : InventoryItem[] = [];
  itemCategories : InventoryItemCategory[] = [];
  inventoryChart: any;

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


  constructor(private itemMgmtController: ItemMgmtControllerService) { }

  ngOnInit() {
    this.itemMgmtController.apiSettingsItemMgmtGet().subscribe(response => {
      this.items = response.items ?? [];
      this.itemCategories = response.categories ?? [];
    })

  }

  // ngAfterViewInit(){
  //   this.initChart(); // Update the chart
  // }



  generateMockItem($event: any) {

    $event.stopPropagation();

    const generatedItems: InventoryItem[] = [];
    let idCounter = 1;

    for (let i = 0; i < 15; i++) {
      const categoryKeys = Object.keys(this.inventoryItems);
      const randomCategory = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
      const categoryIndex = categoryKeys.indexOf(randomCategory) + 1; // ID starts from 1

      const itemName = this.inventoryItems[randomCategory][Math.floor(Math.random() * this.inventoryItems[randomCategory].length)];

      generatedItems.push(Object.assign({} as InventoryItem, {
        id: idCounter++,
        name: itemName,
        itemCategory: Object.assign({} as InventoryItemCategory, { id: categoryIndex, name: randomCategory } as InventoryItemCategory)
      } as InventoryItem));
    }


    // const inventoryList = generateInventoryItems(10); // Generate 10 items
    // console.log(generatedItems);

    generatedItems.forEach(item => {
      this.itemMgmtController.apiSettingsItemMgmtAddPost(item).subscribe(value => {
        console.log("Received response!!! ", value);
      });
    });
  }

  filterItems() {

  }

  // initChart() {
  //   if (!this.items || this.items.length === 0) {
  //     console.warn('No items found. Chart will not render.');
  //     return;
  //   }
  //
  //   const ctx = document.getElementById('inventoryChart') as HTMLCanvasElement;
  //
  //   // Count items per category
  //   const categoryCounts: { [key: string]: number } = {};
  //   this.items.forEach(item => {
  //     if (item.itemCategory?.name) {
  //       categoryCounts[item.itemCategory.name] = (categoryCounts[item.itemCategory.name] || 0) + 1;
  //     }
  //   });
  //
  //   const categoryLabels = Object.keys(categoryCounts);
  //   const categoryData = Object.values(categoryCounts);
  //
  //   // Check if categoryLabels and categoryData are empty
  //   if (categoryLabels.length === 0 || categoryData.length === 0) {
  //     console.warn('No valid categories found. Chart will not render.');
  //     return;
  //   }
  //
  //   // Destroy previous chart instance (to avoid overlapping)
  //   if (this.inventoryChart) {
  //     this.inventoryChart.destroy();
  //   }
  //
  //   // Create new chart
  //   this.inventoryChart = new Chart(ctx, {
  //     type: 'pie',
  //     data: {
  //       labels: categoryLabels,
  //       datasets: [{
  //         data: categoryData,
  //         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800']
  //       }]
  //     }
  //   });
  // }
}
