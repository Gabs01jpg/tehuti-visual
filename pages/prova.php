<?php 
    require_once "conection.php";
?>

<?php function table_prova($a, $conexao, $dados){ ?>

    <?php
        if (!$conexao) {
            echo "Erro ao conectar ao banco de dados: " . mysqli_connect_error();
            exit;
        }
    ?>

    <div class="div-questoes">
        <div class="numero-questoes">Questão <?php echo $a ?></div>
        <!-- tabela do conteudo da questão -->
        <table class="tabela-enunciado-alternativas">
            <caption>
                Vestibulinho <?php echo $dados[$a - 1]['Ano_prova'] . " - " . $dados[$a - 1]['Semestre_prova'] . "° Semestre - " . $dados[$a - 1]['Materia'] . " - " . "Questão " . $dados[$a - 1]['N_questao']?>
            </caption>
            <thead>
                <tr>
                <th scope="col" colspan="2"><?php echo $dados[$a - 1]['Conteudo_questao'] ?></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" class="alternativa-nome"> <input type="radio" name="alternativa-input<?php echo $a ?>" id="Alternativa-a" class="input-alternativa" value="<?php echo $dados[$a - 1]['id']?>-A"></th>
                    <td><?php echo $dados[$a - 1]['Alternativa_A']?></td>
                </tr>
                <tr>
                    <th scope="row" class="alternativa-nome"> <input type="radio" name="alternativa-input<?php echo $a ?>" id="Alternativa-b" class="input-alternativa" value="<?php echo $dados[$a - 1]['id']?>-B"></th>
                    <td><?php echo $dados[$a - 1]['Alternativa_B']?></td>
                </tr>
                <tr>
                    <th scope="row" class="alternativa-nome"> <input type="radio" name="alternativa-input<?php echo $a ?>" id="Alternativa-c" class="input-alternativa" value="<?php echo $dados[$a - 1]['id']?>-C"></th>
                    <td><?php echo $dados[$a - 1]['Alternativa_C']?></td>
                </tr>
                <tr>
                    <th scope="row" class="alternativa-nome"> <input type="radio" name="alternativa-input<?php echo $a ?>" id="Alternativa-d" class="input-alternativa" value="<?php echo $dados[$a - 1]['id']?>-D"></th>
                    <td><?php echo $dados[$a - 1]['Alternativa_D']?></td>
                </tr>
                <tr>
                    <th scope="row" class="alternativa-nome"> <input type="radio" name="alternativa-input<?php echo $a ?>" id="Alternativa-e" class="input-alternativa" value="<?php echo $dados[$a - 1]['id']?>-E"></th>
                    <td><?php echo $dados[$a - 1]['Alternativa_E']?></td>
                </tr>
                
            </tbody>
            <tfoot>
                <tr>
                <th scope="row" colspan="2">Tehuti</th>
                </tr>
            </tfoot>
        </table>
        <!-- fim da tabela de conteudo das questões -->
    </div>

    <!-- <script>
        function getSelectedRadio() {
                // Seleciona todos os inputs de rádio com o name "option"
                var radios = document.querySelectorAll('input[name="alternativa-input1"]');
                // Itera sobre os radios e verifica qual está checado
                for (var radio of radios) {
                    if (radio.checked) {
                        alert(`Selected radio value: ${radio.value}`);
                        break; // Sai do loop assim que o rádio selecionado é encontrado
                    }
                }
            }
    </script> -->

<?php } ?>


