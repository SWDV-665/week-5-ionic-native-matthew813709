// create a class
class Grocery {
    // declare properties and corresponding data type
    name: string;
    quantity: number;
    price: number;

    // add a constructor
    constructor(n: string, q: number, p: number){
        this.name = n;
        this.quantity = q;
        this.price = p;
    }
}

// create a list of grocery items
// new keyword is used to inititalise objects
let list_of_items = [
    new Grocery("milk", 3, 10),
    new Grocery("bread", 6, 25),
    new Grocery("egg", 11, 10)
]

removeItem(item, index) {
    console.log("Removing Item - ", item);
    const toast = this.toastCrtl.create({
        message: 'Removing item' + item.name + "...",
        duration: 3000
    });
toast.present();
this.items.splice(index, 1);

}
addItem() {
    console.log("Adding item");
}

showPrompt() {
    const prompt = this.alertCrtl.create(){
    title: 'Add item',
    message: 'Please enter item',
    inputs: [
    {
        name: 'Name',
        placeholder: 'Name',
    },
    {
        name: 'Quantity',
        placeholder: 'Quantity',
    }
    ],
    buttons: [
        {
            test: 'Cancel',
            handler: data => {
                console.log('Cancel clicked');
            }
        },
    {
            text: 'Save',
            handler: data => {
                console.log('Save clicked', item);
                this.items.push(item);
            }

    }
    ]
    }
    });
    prompt.present();


// access the html element with id app
const ele = document.getElementById("app");

// create a <p> element for each item in the grocery list and
// append it to the html page
list_of_items.forEach(e => {
    const p = document.createElement("p");
    p.textContent = `${e.name} ${e.quantity} -> $${e.price}`;
    ele.appendChild(p);
});
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MainActivity extends AppCompatActivity {
    private EditText itemNameEditText;
    private Button addButton;
    private ListView shoppingListView;

    private Map<String, List<String>> shoppingLists;
    private List<String> currentList;
    private ShoppingListAdapter shoppingListAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        shoppingLists = new HashMap<>();
        currentList = new ArrayList<>();

        itemNameEditText = findViewById(R.id.item_name_edittext);
        addButton = findViewById(R.id.add_button);
        shoppingListView = findViewById(R.id.shopping_list_view);

        shoppingListAdapter = new ShoppingListAdapter(this, currentList);
        shoppingListView.setAdapter(shoppingListAdapter);

        addButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                addItem();
            }
        });
    }

    private void addItem() {
        String itemName = itemNameEditText.getText().toString().trim();

        if (TextUtils.isEmpty(itemName)) {
            Toast.makeText(this, "Please enter an item name", Toast.LENGTH_SHORT).show();
            return;
        }

        currentList.add(itemName);
        shoppingListAdapter.notifyDataSetChanged();
        itemNameEditText.setText("");
    }

    public void scanBarcode(View view) {
        // TODO: Implement barcode scanning functionality
        Toast.makeText(this, "Barcode scanning not implemented", Toast.LENGTH_SHORT).show();
    }

    public void createNewList(View view) {
        String listName = "List " + (shoppingLists.size() + 1);
        shoppingLists.put(listName, new ArrayList<>());
        switchList(listName);
        Toast.makeText(this, "New list created: " + listName, Toast.LENGTH_SHORT).show();
    }

    public void switchList(String listName) {
        if (shoppingLists.containsKey(listName)) {
            currentList = shoppingLists.get(listName);
            shoppingListAdapter.updateList(currentList);
            shoppingListAdapter.notifyDataSetChanged();
        } else {
            Toast.makeText(this, "List not found", Toast.LENGTH_SHORT).show();
        }
    }
}
