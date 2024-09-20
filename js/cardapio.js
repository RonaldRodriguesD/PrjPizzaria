document.addEventListener("DOMContentLoaded", function(){

    class pizza{
        constructor(){
            this.descricao = "Pizza";
        }

        getDescricao(){
            return this.descricao;
        }

        custo(){
            return 0;
        }
    };

    class PizzaPersonalizada extends pizza{
        constructor(sabor, tamanho, borda){
            super();
            this.descricao = `Sabor: ${sabor}<br>Tamanho: ${tamanho}<br>Borda: ${borda}<br><br> Itens extras/opicionais:`;
            this.sabor = sabor;
            this.tamanho = tamanho;
            this.borda = borda;
        }

        custo(){
            
            let preco = 0;

            if(this.sabor === "Margherita"){
                if(this.tamanho === "Brotinho"){
                    preco += 18.75;

                    if(this.borda === "Recheada Catupiry"){
                        preco += 2.00;
                    } else if(this.borda === "Recheada Cheddar"){
                        preco += 3.00;
                    }

                } else if(this.tamanho === "Padrao"){
                    preco += 25.00;

                    if(this.borda === "Recheada Catupiry"){
                        preco += 2.00;
                    } else if(this.borda === "Recheada Cheddar"){
                        preco += 3.00;
                    }

                } else if(this.tamanho === "Grande"){
                    preco += 31.25;

                    if(this.borda === "Recheada Catupiry"){
                        preco += 2.00;
                    } else if(this.borda === "Recheada Cheddar"){
                        preco += 3.00;
                    }

                }

            } else if(this.sabor === "Calabresa"){
                if(this.tamanho === "Brotinho"){
                    preco += 20.00;

                    if(this.borda === "Recheada Catupiry"){
                        preco += 2.00;
                    } else if(this.borda === "Recheada Cheddar"){
                        preco += 3.00;
                    }

                } else if(this.tamanho === "Padrao"){
                    preco += 27.00;

                    if(this.borda === "Recheada Catupiry"){
                        preco += 2.00;
                    } else if(this.borda === "Recheada Cheddar"){
                        preco += 3.00;
                    }

                } else if(this.tamanho === "Grande"){
                    preco += 31.25;

                    if(this.borda === "Recheada Catupiry"){
                        preco += 2.00;
                    } else if(this.borda === "Recheada Cheddar"){
                        preco += 3.00;
                    }

                }

            }else if(this.sabor === "Frango Com Catupiry"){
                if(this.tamanho === "Brotinho"){
                    preco += 22.50;

                    if(this.borda === "Recheada Catupiry"){
                        preco += 2.00;
                    } else if(this.borda === "Recheada Cheddar"){
                        preco += 3.00;
                    }

                } else if(this.tamanho === "Padrao"){
                    preco += 30.00;

                    if(this.borda === "Recheada Catupiry"){
                        preco += 2.00;
                    } else if(this.borda === "Recheada Cheddar"){
                        preco += 3.00;
                    }

                } else if(this.tamanho === "Grande"){
                    preco += 37.50;

                    if(this.borda === "Recheada Catupiry"){
                        preco += 2.00;
                    } else if(this.borda === "Recheada Cheddar"){
                        preco += 3.00;
                    }

                }
            }else if(this.sabor === "Portuguesa"){
                if(this.tamanho === "Brotinho"){
                    preco += 24.50;

                    if(this.borda === "Recheada Catupiry"){
                        preco += 2.00;
                    } else if(this.borda === "Recheada Cheddar"){
                        preco += 3.00;
                    }

                } else if(this.tamanho === "Padrao"){
                    preco += 32.00;

                    if(this.borda === "Recheada Catupiry"){
                        preco += 2.00;
                    } else if(this.borda === "Recheada Cheddar"){
                        preco += 3.00;
                    }

                } else if(this.tamanho === "Grande"){
                    preco += 39.50;

                    if(this.borda === "Recheada Catupiry"){
                        preco += 2.00;
                    } else if(this.borda === "Recheada Cheddar"){
                        preco += 3.00;
                    }

                }
            }else if(this.sabor === "Quatro Queijos"){
                if(this.tamanho === "Brotinho"){
                    preco += 22.50;

                    if(this.borda === "Recheada Catupiry"){
                        preco += 2.00;
                    } else if(this.borda === "Recheada Cheddar"){
                        preco += 3.00;
                    }

                } else if(this.tamanho === "Padrao"){
                    preco += 30.00;

                    if(this.borda === "Recheada Catupiry"){
                        preco += 2.00;
                    } else if(this.borda === "Recheada Cheddar"){
                        preco += 3.00;
                    }

                } else if(this.tamanho === "Grande"){
                    preco += 37.50;

                    if(this.borda === "Recheada Catupiry"){
                        preco += 2.00;
                    } else if(this.borda === "Recheada Cheddar"){
                        preco += 3.00;
                    }

                }
            }

            return preco.toFixed(2);
        }
    }

    class composicaoPizza extends pizza{
        constructor(pizza){
            super();
            this.pizza = pizza;
        }

        getDescricao(){
            return this.pizza.getDescricao();
        }

        custo(){
            return this.pizza.custo();
        }
    }

    class QueijoExtra extends composicaoPizza{
        constructor(pizza){
            super(pizza);
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br> - Queijo Extra`;
        }

        custo(){
            let custoOriginal = parseFloat(this.pizza.custo());
            let novoCusto = custoOriginal + 2.00;
            return novoCusto.toFixed(2);
        }
    }

    class CheddarExtra extends composicaoPizza{
        constructor(pizza){
            super(pizza);
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br> - Cheddar Extra`;
        }

        custo(){
            let custoOriginal = parseFloat(this.pizza.custo());
            let novoCusto = custoOriginal + 5.00;
            return novoCusto.toFixed(2);
        }
    }

    class BaconExtra extends composicaoPizza{
        constructor(pizza){
            super(pizza);
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br> - Bacon Extra`;
        }

        custo(){
            let custoOriginal = parseFloat(this.pizza.custo());
            let novoCusto = custoOriginal + 3.00;
            return novoCusto.toFixed(2);
        }
    }

    class PepperoniExtra extends composicaoPizza{
        constructor(pizza){
            super(pizza);
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br> - pepperoni Extra`;
        }

        custo(){
            let custoOriginal = parseFloat(this.pizza.custo());
            let novoCusto = custoOriginal + 4.00;
            return novoCusto.toFixed(2);
        }
    }

    class OreganoOpicional extends composicaoPizza{
        constructor(pizza){
            super(pizza);
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br> - Orégano`;
        }

    }

    class AzeitonaOpicional extends composicaoPizza{
        constructor(pizza){
            super(pizza);
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br> - Azeitona`;
        }

    }

    class AzeiteOpicional extends composicaoPizza{
        constructor(pizza){
            super(pizza);
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br> - Azeite`;
        }

    }

    class PimentaReinoOpicional extends composicaoPizza{
        constructor(pizza){
            super(pizza);
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br> - Pimenta do reino`;
        }

    }

    function montarPizza(){
        
        //sabor selecionado
        let saborSelecionado = document.querySelector('input[name="sabor"]:checked');
        let sabor = saborSelecionado ? saborSelecionado.value : "";

        //Tamanho selecionado
        let tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked');
        let tamanho = tamanhoSelecionado ? tamanhoSelecionado.value : "padrao";

        //Borda selecionada
        let bordaSelecionada = document.querySelector('input[name="borda"]:checked');
        let borda = bordaSelecionada ? bordaSelecionada.value : "tradicional";

        let pizzaPersonalizada = new PizzaPersonalizada(sabor, tamanho, borda);

        let queijoExtraCheck = document.querySelector('input[name="extraQueijo"]:checked');
        if(queijoExtraCheck){
            pizzaPersonalizada = new QueijoExtra(pizzaPersonalizada);
        }

        let cheddarExtraCheck = document.querySelector('input[name="extraCheddar"]:checked');
        if(cheddarExtraCheck){
            pizzaPersonalizada = new CheddarExtra(pizzaPersonalizada);
        }
        
        let baconExtraCheck = document.querySelector('input[name="extraBacon"]:checked');
        if(baconExtraCheck){
            pizzaPersonalizada = new BaconExtra(pizzaPersonalizada);
        }

        let pepperoniExtraCheck = document.querySelector('input[name="extraPepperoni"]:checked');
        if(pepperoniExtraCheck){
            pizzaPersonalizada = new PepperoniExtra(pizzaPersonalizada);
        }
        
        let oreganoCheck = document.querySelector('input[name="opcionalOregano"]:checked');
        if(oreganoCheck){
            pizzaPersonalizada = new OreganoOpicional(pizzaPersonalizada);
        }
        
        let azeitonaCheck = document.querySelector('input[name="opcionalAzeitona"]:checked');
        if(azeitonaCheck){
            pizzaPersonalizada = new AzeitonaOpicional(pizzaPersonalizada);
        }

        let azeiteCheck = document.querySelector('input[name="opcionalAzeite"]:checked');
        if(azeiteCheck){
            pizzaPersonalizada = new AzeiteOpicional(pizzaPersonalizada);
        }

        let pimentaReinoCheck = document.querySelector('input[name="opcionalPimentaReino"]:checked');
        if(pimentaReinoCheck){
            pizzaPersonalizada = new PimentaReinoOpicional(pizzaPersonalizada);
        }

        let custoTotal = parseFloat(pizzaPersonalizada.custo());
        let pedidoTotal = pizzaPersonalizada.getDescricao();

        const pedidoJSON = {
            "descricao" : pedidoTotal,
            "total" : custoTotal.toFixed(2)
        }

        const pedidoString = JSON.stringify(pedidoJSON);

        window.location.href = `/pedido?pedido=${pedidoString}`;

    }

    // Chama a funcao montar Pizza ao Clicar
    const button = document.querySelector("button");
    button.addEventListener('click', montarPizza);


})