//Crear una cuadrícula responsiva de 4 filas x 4 columnas de botones. Estos botones van a prender/apagar/cambiar color de “luces o focos” , ustedes deciden como interactuan los botones con los focos y de que manera. Deben poner mínimo 4 “focos”. Los focos deciden ustedes como los representan, pueden ser botones, divs y preferentemente imágenes, por ejemplo poner un foco apagado, después uno prendido, de colores, etc . Tip el src de una imagen se puede cambiar desde js

let colores = document.getElementsByTagName("button");

//Lo que hará el código es revisar el valor de los botones, poniendo valores de 1 a 4 para que sea el equivalente al foco, después ponemos funciones "switch" para que haga el cambio de acuerdo a la clase que tenga, ya que cada valor tiene 4 clases distintas, el equivalente al color que queremos que cambie.
for (let i = 0; i < colores.length; i++) {
    colores[i].addEventListener("click", function () {
        switch (colores[i].value) {
            case "1":
                switch (this.classList[1]) {
                    case "btn-success":
                        document.getElementById("focoUno").src = "https://bn1305files.storage.live.com/y4mcAJEMkKRAnqwRd7tVyLHZDerr5Qv9TeOsA88Juu4ujRo_gHoKGOab1I5o0-dKAzZN1MR3KqABygonMuGTj8dXbFqRqZI3e3Kieh9_cPIDyKevPz_nHImz-evQExd911X4g4JLsq3BHyDLLs8upgOtbGKcRzcP60s_rM962dikCHkfOaQFu6uqwBP_fopvn6r62lkSveEwljM3aFYEqbdyA/foco_Verde.png?psid=1&width=342&height=525"
                        break;
                    case "btn-danger":
                        document.getElementById("focoUno").src = "https://bn1305files.storage.live.com/y4mAykA18-QLd082nCg14iaU4rwWNjXF0dpkhhVTtUOFnj4PYzuf0w1D6mh5HaKmERbst2d5RL3aE-mQioz0FJ1JMuKflMyPaXs_v33ulFaCFeB-04OIzM8mJdvhpxxifOeLv-NMclFYdC5WhfnJuxAlTrUEY-vDcc-C4fqyOgNLOue2t3vhCUrwViyPoAiG9Pcs4Zmd8FQd0NEpvmTmxTRJg/foco_Rojo.png?psid=1&width=342&height=525"
                        break;
                    case "btn-primary":
                        document.getElementById("focoUno").src = "https://bn1305files.storage.live.com/y4mlD95k-7yfqTlMGu_VGhEEnJvCYvCpZBFP4vsCvxswJOfz0x_TjlY0TMG4eZKMltQwTulO_jMhTeCiC9_YQpxdsiFlqv0BHTR5xRkmh4qwLqi6l0JRs2bG6lQJoXdrqEKUIb9nePLGTgUc4vZVS-sydtjC5HGTD-sb0G8zCK9GwdjWhHjceWUr2UQY0MAYK66lmmkv_dabjng9UNgZfDDGA/foco__Azul.png?psid=1&width=342&height=525"
                        break;
                    case "btn-warning":
                        document.getElementById("focoUno").src = "https://bn1305files.storage.live.com/y4mqY1BfF4yF30fOa-7A3v4q6PCqEO75M2nAeybqBBoiOzETYi1OY3X-EJ5cK1BDCXllFH1Y_RAk4THWhO2HTlllSIWwEKdNvR-_KIWf0SikhJWgdgOhDMKGyQh6WB60phRd7HPYsRiMVxDwBtwGpvkl8Rzj7iBYrNQjk-qeE87R721Pnbcb_O-X-5I6mOO1nSXUllVk4uzVbEwIZVEUm4MyA/foco_Encendido.png?psid=1&width=145&height=222"
                        break;
                }
                break;
            case "2":
                switch (this.classList[1]) {
                    case "btn-success":
                        document.getElementById("focoDos").src = "https://bn1305files.storage.live.com/y4mcAJEMkKRAnqwRd7tVyLHZDerr5Qv9TeOsA88Juu4ujRo_gHoKGOab1I5o0-dKAzZN1MR3KqABygonMuGTj8dXbFqRqZI3e3Kieh9_cPIDyKevPz_nHImz-evQExd911X4g4JLsq3BHyDLLs8upgOtbGKcRzcP60s_rM962dikCHkfOaQFu6uqwBP_fopvn6r62lkSveEwljM3aFYEqbdyA/foco_Verde.png?psid=1&width=342&height=525"
                        break;
                    case "btn-danger":
                        document.getElementById("focoDos").src = "https://bn1305files.storage.live.com/y4mAykA18-QLd082nCg14iaU4rwWNjXF0dpkhhVTtUOFnj4PYzuf0w1D6mh5HaKmERbst2d5RL3aE-mQioz0FJ1JMuKflMyPaXs_v33ulFaCFeB-04OIzM8mJdvhpxxifOeLv-NMclFYdC5WhfnJuxAlTrUEY-vDcc-C4fqyOgNLOue2t3vhCUrwViyPoAiG9Pcs4Zmd8FQd0NEpvmTmxTRJg/foco_Rojo.png?psid=1&width=342&height=525"
                        break;
                    case "btn-primary":
                        document.getElementById("focoDos").src = "https://bn1305files.storage.live.com/y4mlD95k-7yfqTlMGu_VGhEEnJvCYvCpZBFP4vsCvxswJOfz0x_TjlY0TMG4eZKMltQwTulO_jMhTeCiC9_YQpxdsiFlqv0BHTR5xRkmh4qwLqi6l0JRs2bG6lQJoXdrqEKUIb9nePLGTgUc4vZVS-sydtjC5HGTD-sb0G8zCK9GwdjWhHjceWUr2UQY0MAYK66lmmkv_dabjng9UNgZfDDGA/foco__Azul.png?psid=1&width=342&height=525"
                        break;
                    case "btn-warning":
                        document.getElementById("focoDos").src = "https://bn1305files.storage.live.com/y4mqY1BfF4yF30fOa-7A3v4q6PCqEO75M2nAeybqBBoiOzETYi1OY3X-EJ5cK1BDCXllFH1Y_RAk4THWhO2HTlllSIWwEKdNvR-_KIWf0SikhJWgdgOhDMKGyQh6WB60phRd7HPYsRiMVxDwBtwGpvkl8Rzj7iBYrNQjk-qeE87R721Pnbcb_O-X-5I6mOO1nSXUllVk4uzVbEwIZVEUm4MyA/foco_Encendido.png?psid=1&width=145&height=222"
                        break;
                }
                break;
            case "3":
                switch (this.classList[1]) {
                    case "btn-success":
                        document.getElementById("focoTres").src = "https://bn1305files.storage.live.com/y4mcAJEMkKRAnqwRd7tVyLHZDerr5Qv9TeOsA88Juu4ujRo_gHoKGOab1I5o0-dKAzZN1MR3KqABygonMuGTj8dXbFqRqZI3e3Kieh9_cPIDyKevPz_nHImz-evQExd911X4g4JLsq3BHyDLLs8upgOtbGKcRzcP60s_rM962dikCHkfOaQFu6uqwBP_fopvn6r62lkSveEwljM3aFYEqbdyA/foco_Verde.png?psid=1&width=342&height=525"
                        break;
                    case "btn-danger":
                        document.getElementById("focoTres").src = "https://bn1305files.storage.live.com/y4mAykA18-QLd082nCg14iaU4rwWNjXF0dpkhhVTtUOFnj4PYzuf0w1D6mh5HaKmERbst2d5RL3aE-mQioz0FJ1JMuKflMyPaXs_v33ulFaCFeB-04OIzM8mJdvhpxxifOeLv-NMclFYdC5WhfnJuxAlTrUEY-vDcc-C4fqyOgNLOue2t3vhCUrwViyPoAiG9Pcs4Zmd8FQd0NEpvmTmxTRJg/foco_Rojo.png?psid=1&width=342&height=525"
                        break;
                    case "btn-primary":
                        document.getElementById("focoTres").src = "https://bn1305files.storage.live.com/y4mlD95k-7yfqTlMGu_VGhEEnJvCYvCpZBFP4vsCvxswJOfz0x_TjlY0TMG4eZKMltQwTulO_jMhTeCiC9_YQpxdsiFlqv0BHTR5xRkmh4qwLqi6l0JRs2bG6lQJoXdrqEKUIb9nePLGTgUc4vZVS-sydtjC5HGTD-sb0G8zCK9GwdjWhHjceWUr2UQY0MAYK66lmmkv_dabjng9UNgZfDDGA/foco__Azul.png?psid=1&width=342&height=525"
                        break;
                    case "btn-warning":
                        document.getElementById("focoTres").src = "https://bn1305files.storage.live.com/y4mqY1BfF4yF30fOa-7A3v4q6PCqEO75M2nAeybqBBoiOzETYi1OY3X-EJ5cK1BDCXllFH1Y_RAk4THWhO2HTlllSIWwEKdNvR-_KIWf0SikhJWgdgOhDMKGyQh6WB60phRd7HPYsRiMVxDwBtwGpvkl8Rzj7iBYrNQjk-qeE87R721Pnbcb_O-X-5I6mOO1nSXUllVk4uzVbEwIZVEUm4MyA/foco_Encendido.png?psid=1&width=145&height=222"
                        break;
                }
                break;
            case "4":
                switch (this.classList[1]) {
                    case "btn-success":
                        document.getElementById("focoCuatro").src = "https://bn1305files.storage.live.com/y4mcAJEMkKRAnqwRd7tVyLHZDerr5Qv9TeOsA88Juu4ujRo_gHoKGOab1I5o0-dKAzZN1MR3KqABygonMuGTj8dXbFqRqZI3e3Kieh9_cPIDyKevPz_nHImz-evQExd911X4g4JLsq3BHyDLLs8upgOtbGKcRzcP60s_rM962dikCHkfOaQFu6uqwBP_fopvn6r62lkSveEwljM3aFYEqbdyA/foco_Verde.png?psid=1&width=342&height=525"
                        break;
                    case "btn-danger":
                        document.getElementById("focoCuatro").src = "https://bn1305files.storage.live.com/y4mAykA18-QLd082nCg14iaU4rwWNjXF0dpkhhVTtUOFnj4PYzuf0w1D6mh5HaKmERbst2d5RL3aE-mQioz0FJ1JMuKflMyPaXs_v33ulFaCFeB-04OIzM8mJdvhpxxifOeLv-NMclFYdC5WhfnJuxAlTrUEY-vDcc-C4fqyOgNLOue2t3vhCUrwViyPoAiG9Pcs4Zmd8FQd0NEpvmTmxTRJg/foco_Rojo.png?psid=1&width=342&height=525"
                        break;
                    case "btn-primary":
                        document.getElementById("focoCuatro").src = "https://bn1305files.storage.live.com/y4mlD95k-7yfqTlMGu_VGhEEnJvCYvCpZBFP4vsCvxswJOfz0x_TjlY0TMG4eZKMltQwTulO_jMhTeCiC9_YQpxdsiFlqv0BHTR5xRkmh4qwLqi6l0JRs2bG6lQJoXdrqEKUIb9nePLGTgUc4vZVS-sydtjC5HGTD-sb0G8zCK9GwdjWhHjceWUr2UQY0MAYK66lmmkv_dabjng9UNgZfDDGA/foco__Azul.png?psid=1&width=342&height=525"
                        break;
                    case "btn-warning":
                        document.getElementById("focoCuatro").src = "https://bn1305files.storage.live.com/y4mqY1BfF4yF30fOa-7A3v4q6PCqEO75M2nAeybqBBoiOzETYi1OY3X-EJ5cK1BDCXllFH1Y_RAk4THWhO2HTlllSIWwEKdNvR-_KIWf0SikhJWgdgOhDMKGyQh6WB60phRd7HPYsRiMVxDwBtwGpvkl8Rzj7iBYrNQjk-qeE87R721Pnbcb_O-X-5I6mOO1nSXUllVk4uzVbEwIZVEUm4MyA/foco_Encendido.png?psid=1&width=145&height=222"
                        break;
                }
                break;
        }
    }
    )
};