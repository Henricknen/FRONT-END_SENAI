# trabalho_em_equipe

colaborador_1:luis_henrick

Aluno@ESN914D1233543 MINGW64 ~/Desktop/atividade_presencialUC7 (master)
$ git config --global user.name "luis henrique"

Aluno@ESN914D1233543 MINGW64 ~/Desktop/atividade_presencialUC7 (master)
$ git config --global user.email "l.henrick@live.com"

Aluno@ESN914D1233543 MINGW64 ~/Desktop/atividade_presencialUC7 (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        deleted:    Novo Documento de Texto.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.txt

no changes added to commit (use "git add" and/or "git commit -a")

Aluno@ESN914D1233543 MINGW64 ~/Desktop/atividade_presencialUC7 (master)
$ git add .

Aluno@ESN914D1233543 MINGW64 ~/Desktop/atividade_presencialUC7 (master)
$ git commit -m "adição de pag inicial"
[master 651a1b9] adição de pag inicial
 1 file changed, 0 insertions(+), 0 deletions(-)
 rename Novo Documento de Texto.txt => index.txt (100%)

Aluno@ESN914D1233543 MINGW64 ~/Desktop/atividade_presencialUC7 (master)
$ git log
commit 651a1b93f3ab1da18f439b365afcdb0314d03d32 (HEAD -> master)
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:11:04 2021 -0300

    adição de pag inicial

commit 2fbd1ec862b59ab6d37aab9e3c2b19162abf87a5
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 20:47:33 2021 -0300

    novo

Aluno@ESN914D1233543 MINGW64 ~/Desktop/atividade_presencialUC7 (master)
$ git remote add origin https://github.com/Henricknen/trabalho_em_equipe.git

Aluno@ESN914D1233543 MINGW64 ~/Desktop/atividade_presencialUC7 (master)
$ git branch -M main

Aluno@ESN914D1233543 MINGW64 ~/Desktop/atividade_presencialUC7 (main)
$ git push -u origin main
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 6 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (5/5), 443 bytes | 221.00 KiB/s, done.
Total 5 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/Henricknen/trabalho_em_equipe.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.

Aluno@ESN914D1233543 MINGW64 ~/Desktop/atividade_presencialUC7 (main)
$ git pull origin main
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 3 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), 265 bytes | 13.00 KiB/s, done.
From https://github.com/Henricknen/trabalho_em_equipe
 * branch            main       -> FETCH_HEAD
   651a1b9..7a657eb  main       -> origin/main
Updating 651a1b9..7a657eb
Fast-forward
 roupas.txt | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 roupas.txt

Aluno@ESN914D1233543 MINGW64 ~/Desktop/atividade_presencialUC7 (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.txt

no changes added to commit (use "git add" and/or "git commit -a")

Aluno@ESN914D1233543 MINGW64 ~/Desktop/atividade_presencialUC7 (main)
$ git add .

Aluno@ESN914D1233543 MINGW64 ~/Desktop/atividade_presencialUC7 (main)
$ git commit -m "modificação"
[main 6a03b62] modificação
 1 file changed, 1 insertion(+), 1 deletion(-)

Aluno@ESN914D1233543 MINGW64 ~/Desktop/atividade_presencialUC7 (main)
$ git log
commit 6a03b624a2f1d31e600c6b0cde0d93802b15e5e7 (HEAD -> main)
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:22:21 2021 -0300

    modificação

commit 7a657ebcd6b329f78892b96abfa86195ffda117a (origin/main)
Author: Gabriel Hay <gabrielhayashida@live.com>
Date:   Thu Sep 9 21:17:24 2021 -0300

    adicionado pagina roupas

commit 651a1b93f3ab1da18f439b365afcdb0314d03d32
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:11:04 2021 -0300

    adição de pag inicial

commit 2fbd1ec862b59ab6d37aab9e3c2b19162abf87a5
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 20:47:33 2021 -0300

    novo
...skipping...
commit 6a03b624a2f1d31e600c6b0cde0d93802b15e5e7 (HEAD -> main)
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:22:21 2021 -0300

    modificação

commit 7a657ebcd6b329f78892b96abfa86195ffda117a (origin/main)
Author: Gabriel Hay <gabrielhayashida@live.com>
Date:   Thu Sep 9 21:17:24 2021 -0300

    adicionado pagina roupas

commit 651a1b93f3ab1da18f439b365afcdb0314d03d32
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:11:04 2021 -0300

    adição de pag inicial

commit 2fbd1ec862b59ab6d37aab9e3c2b19162abf87a5
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 20:47:33 2021 -0300

    novo
...skipping...
commit 6a03b624a2f1d31e600c6b0cde0d93802b15e5e7 (HEAD -> main)
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:22:21 2021 -0300

    modificação

commit 7a657ebcd6b329f78892b96abfa86195ffda117a (origin/main)
Author: Gabriel Hay <gabrielhayashida@live.com>
Date:   Thu Sep 9 21:17:24 2021 -0300

    adicionado pagina roupas

commit 651a1b93f3ab1da18f439b365afcdb0314d03d32
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:11:04 2021 -0300

    adição de pag inicial

commit 2fbd1ec862b59ab6d37aab9e3c2b19162abf87a5
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 20:47:33 2021 -0300

    novo
...skipping...
commit 6a03b624a2f1d31e600c6b0cde0d93802b15e5e7 (HEAD -> main)
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:22:21 2021 -0300

    modificação

commit 7a657ebcd6b329f78892b96abfa86195ffda117a (origin/main)
Author: Gabriel Hay <gabrielhayashida@live.com>
Date:   Thu Sep 9 21:17:24 2021 -0300

    adicionado pagina roupas

commit 651a1b93f3ab1da18f439b365afcdb0314d03d32
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:11:04 2021 -0300

    adição de pag inicial

commit 2fbd1ec862b59ab6d37aab9e3c2b19162abf87a5
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 20:47:33 2021 -0300

    novo
...skipping...
commit 6a03b624a2f1d31e600c6b0cde0d93802b15e5e7 (HEAD -> main)
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:22:21 2021 -0300

    modificação

commit 7a657ebcd6b329f78892b96abfa86195ffda117a (origin/main)
Author: Gabriel Hay <gabrielhayashida@live.com>
Date:   Thu Sep 9 21:17:24 2021 -0300

    adicionado pagina roupas

commit 651a1b93f3ab1da18f439b365afcdb0314d03d32
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:11:04 2021 -0300

    adição de pag inicial

commit 2fbd1ec862b59ab6d37aab9e3c2b19162abf87a5
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 20:47:33 2021 -0300

    novo
...skipping...
commit 6a03b624a2f1d31e600c6b0cde0d93802b15e5e7 (HEAD -> main)
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:22:21 2021 -0300

    modificação

commit 7a657ebcd6b329f78892b96abfa86195ffda117a (origin/main)
Author: Gabriel Hay <gabrielhayashida@live.com>
Date:   Thu Sep 9 21:17:24 2021 -0300

    adicionado pagina roupas

commit 651a1b93f3ab1da18f439b365afcdb0314d03d32
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:11:04 2021 -0300

    adição de pag inicial

commit 2fbd1ec862b59ab6d37aab9e3c2b19162abf87a5
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 20:47:33 2021 -0300

    novo
...skipping...
commit 6a03b624a2f1d31e600c6b0cde0d93802b15e5e7 (HEAD -> main)
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:22:21 2021 -0300

    modificação

commit 7a657ebcd6b329f78892b96abfa86195ffda117a (origin/main)
Author: Gabriel Hay <gabrielhayashida@live.com>
Date:   Thu Sep 9 21:17:24 2021 -0300

    adicionado pagina roupas

commit 651a1b93f3ab1da18f439b365afcdb0314d03d32
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:11:04 2021 -0300

    adição de pag inicial

commit 2fbd1ec862b59ab6d37aab9e3c2b19162abf87a5
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 20:47:33 2021 -0300

    novo
...skipping...
commit 6a03b624a2f1d31e600c6b0cde0d93802b15e5e7 (HEAD -> main)
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:22:21 2021 -0300

    modificação

commit 7a657ebcd6b329f78892b96abfa86195ffda117a (origin/main)
Author: Gabriel Hay <gabrielhayashida@live.com>
Date:   Thu Sep 9 21:17:24 2021 -0300

    adicionado pagina roupas

commit 651a1b93f3ab1da18f439b365afcdb0314d03d32
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:11:04 2021 -0300

    adição de pag inicial

commit 2fbd1ec862b59ab6d37aab9e3c2b19162abf87a5
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 20:47:33 2021 -0300

    novo
...skipping...
commit 6a03b624a2f1d31e600c6b0cde0d93802b15e5e7 (HEAD -> main)
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:22:21 2021 -0300

    modificação

commit 7a657ebcd6b329f78892b96abfa86195ffda117a (origin/main)
Author: Gabriel Hay <gabrielhayashida@live.com>
Date:   Thu Sep 9 21:17:24 2021 -0300

    adicionado pagina roupas

commit 651a1b93f3ab1da18f439b365afcdb0314d03d32
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:11:04 2021 -0300

    adição de pag inicial

commit 2fbd1ec862b59ab6d37aab9e3c2b19162abf87a5
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 20:47:33 2021 -0300

    novo
...skipping...
commit 6a03b624a2f1d31e600c6b0cde0d93802b15e5e7 (HEAD -> main)
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:22:21 2021 -0300

    modificação

commit 7a657ebcd6b329f78892b96abfa86195ffda117a (origin/main)
Author: Gabriel Hay <gabrielhayashida@live.com>
Date:   Thu Sep 9 21:17:24 2021 -0300

    adicionado pagina roupas

commit 651a1b93f3ab1da18f439b365afcdb0314d03d32
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:11:04 2021 -0300

    adição de pag inicial

commit 2fbd1ec862b59ab6d37aab9e3c2b19162abf87a5
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 20:47:33 2021 -0300

    novo
(END)      0 [sig] bash 1020! sigpacket::process: Suppressing signal 18 to win32 process (pid 7796)
commit 6a03b624a2f1d31e600c6b0cde0d93802b15e5e7 (HEAD -> main)
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:22:21 2021 -0300

    modificação

commit 7a657ebcd6b329f78892b96abfa86195ffda117a (origin/main)
Author: Gabriel Hay <gabrielhayashida@live.com>
Date:   Thu Sep 9 21:17:24 2021 -0300

    adicionado pagina roupas

commit 651a1b93f3ab1da18f439b365afcdb0314d03d32
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:11:04 2021 -0300

    adição de pag inicial

commit 2fbd1ec862b59ab6d37aab9e3c2b19162abf87a5
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 20:47:33 2021 -0300

    novo
(END) 255866 [sig] bash 1020! sigpacket::process: Suppressing signal 18 to win32 process (pid 7796)
commit 6a03b624a2f1d31e600c6b0cde0d93802b15e5e7 (HEAD -> main)
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:22:21 2021 -0300

    modificação

commit 7a657ebcd6b329f78892b96abfa86195ffda117a (origin/main)
Author: Gabriel Hay <gabrielhayashida@live.com>
Date:   Thu Sep 9 21:17:24 2021 -0300

    adicionado pagina roupas

commit 651a1b93f3ab1da18f439b365afcdb0314d03d32
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:11:04 2021 -0300

    adição de pag inicial

commit 2fbd1ec862b59ab6d37aab9e3c2b19162abf87a5
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 20:47:33 2021 -0300

    novo
(END) 527999 [sig] bash 1020! sigpacket::process: Suppressing signal 18 to win32 process (pid 7796)
commit 6a03b624a2f1d31e600c6b0cde0d93802b15e5e7 (HEAD -> main)
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:22:21 2021 -0300

    modificação

commit 7a657ebcd6b329f78892b96abfa86195ffda117a (origin/main)
Author: Gabriel Hay <gabrielhayashida@live.com>
Date:   Thu Sep 9 21:17:24 2021 -0300

    adicionado pagina roupas

commit 651a1b93f3ab1da18f439b365afcdb0314d03d32
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:11:04 2021 -0300

    adição de pag inicial

commit 2fbd1ec862b59ab6d37aab9e3c2b19162abf87a5
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 20:47:33 2021 -0300

    novo
...skipping...

                   SUMMARY OF LESS COMMANDS

      Commands marked with * may be preceded by a number, N.
      Notes in parentheses indicate the behavior if N is given.
      A key preceded by a caret indicates the Ctrl key; thus ^K is ctrl-K.

  h  H                 Display this help.
  q  :q  Q  :Q  ZZ     Exit.
 ---------------------------------------------------------------------------

                           MOVING

  e  ^E  j  ^N  CR  *  Forward  one line   (or N lines).
  y  ^Y  k  ^K  ^P  *  Backward one line   (or N lines).
  f  ^F  ^V  SPACE  *  Forward  one window (or N lines).
  b  ^B  ESC-v      *  Backward one window (or N lines).
  z                 *  Forward  one window (and set window to N).
  w                 *  Backward one window (and set window to N).
  ESC-SPACE         *  Forward  one window, but don't stop at end-of-file.
  d  ^D             *  Forward  one half-window (and set half-window to N).
  u  ^U             *  Backward one half-window (and set half-window to N).
  ESC-)  RightArrow *  Right one half screen width (or N positions).
HELP -- Press RETURN for more, or q when done4127381 [sig] bash 1020! sigpacket::process: Suppressing signal 18 to win32 process (pid 7796)

                   SUMMARY OF LESS COMMANDS

      Commands marked with * may be preceded by a number, N.
      Notes in parentheses indicate the behavior if N is given.
      A key preceded by a caret indicates the Ctrl key; thus ^K is ctrl-K.

  h  H                 Display this help.
  q  :q  Q  :Q  ZZ     Exit.
 ---------------------------------------------------------------------------

                           MOVING

  e  ^E  j  ^N  CR  *  Forward  one line   (or N lines).
  y  ^Y  k  ^K  ^P  *  Backward one line   (or N lines).
  f  ^F  ^V  SPACE  *  Forward  one window (or N lines).
  b  ^B  ESC-v      *  Backward one window (or N lines).
  z                 *  Forward  one window (and set window to N).
  w                 *  Backward one window (and set window to N).
  ESC-SPACE         *  Forward  one window, but don't stop at end-of-file.
  d  ^D             *  Forward  one half-window (and set half-window to N).
  u  ^U             *  Backward one half-window (and set half-window to N).
  ESC-)  RightArrow *  Right one half screen width (or N positions).
HELP -- Press RETURN for more, or q when done9200006 [sig] bash 1020! sigpacket::process: Suppressing signal 18 to win32 process (pid 7796)

                   SUMMARY OF LESS COMMANDS

      Commands marked with * may be preceded by a number, N.
      Notes in parentheses indicate the behavior if N is given.
      A key preceded by a caret indicates the Ctrl key; thus ^K is ctrl-K.

  h  H                 Display this help.
  q  :q  Q  :Q  ZZ     Exit.
 ---------------------------------------------------------------------------

                           MOVING

  e  ^E  j  ^N  CR  *  Forward  one line   (or N lines).
  y  ^Y  k  ^K  ^P  *  Backward one line   (or N lines).
  f  ^F  ^V  SPACE  *  Forward  one window (or N lines).
  b  ^B  ESC-v      *  Backward one window (or N lines).
  z                 *  Forward  one window (and set window to N).
  w                 *  Backward one window (and set window to N).
  ESC-SPACE         *  Forward  one window, but don't stop at end-of-file.
  d  ^D             *  Forward  one half-window (and set half-window to N).
  u  ^U             *  Backward one half-window (and set half-window to N).
  ESC-)  RightArrow *  Right one half screen width (or N positions).
HELP -- Press RETURN for more, or q when done9456077 [sig] bash 1020! sigpacket::process: Suppressing signal 18 to win32 process (pid 7796)

                   SUMMARY OF LESS COMMANDS

      Commands marked with * may be preceded by a number, N.
      Notes in parentheses indicate the behavior if N is given.
      A key preceded by a caret indicates the Ctrl key; thus ^K is ctrl-K.

  h  H                 Display this help.
  q  :q  Q  :Q  ZZ     Exit.
 ---------------------------------------------------------------------------

                           MOVING

  e  ^E  j  ^N  CR  *  Forward  one line   (or N lines).
  y  ^Y  k  ^K  ^P  *  Backward one line   (or N lines).
  f  ^F  ^V  SPACE  *  Forward  one window (or N lines).
  b  ^B  ESC-v      *  Backward one window (or N lines).
  z                 *  Forward  one window (and set window to N).
  w                 *  Backward one window (and set window to N).
  ESC-SPACE         *  Forward  one window, but don't stop at end-of-file.
  d  ^D             *  Forward  one half-window (and set half-window to N).
  u  ^U             *  Backward one half-window (and set half-window to N).
  ESC-)  RightArrow *  Right one half screen width (or N positions).
...skipping...
 ---------------------------------------------------------------------------

                          LINE EDITING

        These keys can be used to edit text being entered
        on the "command line" at the bottom of the screen.

 RightArrow ..................... ESC-l ... Move cursor right one character.
 LeftArrow ...................... ESC-h ... Move cursor left one character.
 ctrl-RightArrow  ESC-RightArrow  ESC-w ... Move cursor right one word.
 ctrl-LeftArrow   ESC-LeftArrow   ESC-b ... Move cursor left one word.
 HOME ........................... ESC-0 ... Move cursor to start of line.
 END ............................ ESC-$ ... Move cursor to end of line.
 BACKSPACE ................................ Delete char to left of cursor.
 DELETE ......................... ESC-x ... Delete char under cursor.
 ctrl-BACKSPACE   ESC-BACKSPACE ........... Delete word to left of cursor.
 ctrl-DELETE .... ESC-DELETE .... ESC-X ... Delete word under cursor.
 ctrl-U ......... ESC (MS-DOS only) ....... Delete entire line.
 UpArrow ........................ ESC-k ... Retrieve previous command line.
 DownArrow ...................... ESC-j ... Retrieve next command line.
 TAB ...................................... Complete filename & cycle.
 SHIFT-TAB ...................... ESC-TAB   Complete filename & reverse cycle.
 ctrl-L ................................... Complete filename, list all.
...skipping...
 ---------------------------------------------------------------------------

                          LINE EDITING

        These keys can be used to edit text being entered
        on the "command line" at the bottom of the screen.

 RightArrow ..................... ESC-l ... Move cursor right one character.
 LeftArrow ...................... ESC-h ... Move cursor left one character.
 ctrl-RightArrow  ESC-RightArrow  ESC-w ... Move cursor right one word.
 ctrl-LeftArrow   ESC-LeftArrow   ESC-b ... Move cursor left one word.
 HOME ........................... ESC-0 ... Move cursor to start of line.
 END ............................ ESC-$ ... Move cursor to end of line.
 BACKSPACE ................................ Delete char to left of cursor.
 DELETE ......................... ESC-x ... Delete char under cursor.
 ctrl-BACKSPACE   ESC-BACKSPACE ........... Delete word to left of cursor.
 ctrl-DELETE .... ESC-DELETE .... ESC-X ... Delete word under cursor.
 ctrl-U ......... ESC (MS-DOS only) ....... Delete entire line.
 UpArrow ........................ ESC-k ... Retrieve previous command line.
 DownArrow ...................... ESC-j ... Retrieve next command line.
 TAB ...................................... Complete filename & cycle.
 SHIFT-TAB ...................... ESC-TAB   Complete filename & reverse cycle.
 ctrl-L ................................... Complete filename, list all.
...skipping...
 ---------------------------------------------------------------------------

                          LINE EDITING

        These keys can be used to edit text being entered
        on the "command line" at the bottom of the screen.

 RightArrow ..................... ESC-l ... Move cursor right one character.
 LeftArrow ...................... ESC-h ... Move cursor left one character.
 ctrl-RightArrow  ESC-RightArrow  ESC-w ... Move cursor right one word.
 ctrl-LeftArrow   ESC-LeftArrow   ESC-b ... Move cursor left one word.
 HOME ........................... ESC-0 ... Move cursor to start of line.
 END ............................ ESC-$ ... Move cursor to end of line.
 BACKSPACE ................................ Delete char to left of cursor.
 DELETE ......................... ESC-x ... Delete char under cursor.
 ctrl-BACKSPACE   ESC-BACKSPACE ........... Delete word to left of cursor.
 ctrl-DELETE .... ESC-DELETE .... ESC-X ... Delete word under cursor.
 ctrl-U ......... ESC (MS-DOS only) ....... Delete entire line.
 UpArrow ........................ ESC-k ... Retrieve previous command line.
 DownArrow ...................... ESC-j ... Retrieve next command line.
 TAB ...................................... Complete filename & cycle.
 SHIFT-TAB ...................... ESC-TAB   Complete filename & reverse cycle.
 ctrl-L ................................... Complete filename, list all.
...skipping...
 ---------------------------------------------------------------------------

                          LINE EDITING

        These keys can be used to edit text being entered
        on the "command line" at the bottom of the screen.

 RightArrow ..................... ESC-l ... Move cursor right one character.
 LeftArrow ...................... ESC-h ... Move cursor left one character.
 ctrl-RightArrow  ESC-RightArrow  ESC-w ... Move cursor right one word.
 ctrl-LeftArrow   ESC-LeftArrow   ESC-b ... Move cursor left one word.
 HOME ........................... ESC-0 ... Move cursor to start of line.
 END ............................ ESC-$ ... Move cursor to end of line.
 BACKSPACE ................................ Delete char to left of cursor.
 DELETE ......................... ESC-x ... Delete char under cursor.
 ctrl-BACKSPACE   ESC-BACKSPACE ........... Delete word to left of cursor.
 ctrl-DELETE .... ESC-DELETE .... ESC-X ... Delete word under cursor.
 ctrl-U ......... ESC (MS-DOS only) ....... Delete entire line.
 UpArrow ........................ ESC-k ... Retrieve previous command line.
 DownArrow ...................... ESC-j ... Retrieve next command line.
 TAB ...................................... Complete filename & cycle.
 SHIFT-TAB ...................... ESC-TAB   Complete filename & reverse cycle.
 ctrl-L ................................... Complete filename, list all.
...skipping...
 ---------------------------------------------------------------------------

                          LINE EDITING

        These keys can be used to edit text being entered
        on the "command line" at the bottom of the screen.

 RightArrow ..................... ESC-l ... Move cursor right one character.
 LeftArrow ...................... ESC-h ... Move cursor left one character.
 ctrl-RightArrow  ESC-RightArrow  ESC-w ... Move cursor right one word.
 ctrl-LeftArrow   ESC-LeftArrow   ESC-b ... Move cursor left one word.
 HOME ........................... ESC-0 ... Move cursor to start of line.
 END ............................ ESC-$ ... Move cursor to end of line.
 BACKSPACE ................................ Delete char to left of cursor.
 DELETE ......................... ESC-x ... Delete char under cursor.
 ctrl-BACKSPACE   ESC-BACKSPACE ........... Delete word to left of cursor.
 ctrl-DELETE .... ESC-DELETE .... ESC-X ... Delete word under cursor.
 ctrl-U ......... ESC (MS-DOS only) ....... Delete entire line.
 UpArrow ........................ ESC-k ... Retrieve previous command line.
 DownArrow ...................... ESC-j ... Retrieve next command line.
 TAB ...................................... Complete filename & cycle.
 SHIFT-TAB ...................... ESC-TAB   Complete filename & reverse cycle.
 ctrl-L ................................... Complete filename, list all.
...skipping...
 ---------------------------------------------------------------------------

                          LINE EDITING

        These keys can be used to edit text being entered
        on the "command line" at the bottom of the screen.

 RightArrow ..................... ESC-l ... Move cursor right one character.
 LeftArrow ...................... ESC-h ... Move cursor left one character.
 ctrl-RightArrow  ESC-RightArrow  ESC-w ... Move cursor right one word.
 ctrl-LeftArrow   ESC-LeftArrow   ESC-b ... Move cursor left one word.
 HOME ........................... ESC-0 ... Move cursor to start of line.
 END ............................ ESC-$ ... Move cursor to end of line.
 BACKSPACE ................................ Delete char to left of cursor.
 DELETE ......................... ESC-x ... Delete char under cursor.
 ctrl-BACKSPACE   ESC-BACKSPACE ........... Delete word to left of cursor.
 ctrl-DELETE .... ESC-DELETE .... ESC-X ... Delete word under cursor.
 ctrl-U ......... ESC (MS-DOS only) ....... Delete entire line.
 UpArrow ........................ ESC-k ... Retrieve previous command line.
 DownArrow ...................... ESC-j ... Retrieve next command line.
 TAB ...................................... Complete filename & cycle.
 SHIFT-TAB ...................... ESC-TAB   Complete filename & reverse cycle.
 ctrl-L ................................... Complete filename, list all.
...skipping...
 ---------------------------------------------------------------------------

                          LINE EDITING

        These keys can be used to edit text being entered
        on the "command line" at the bottom of the screen.

 RightArrow ..................... ESC-l ... Move cursor right one character.
 LeftArrow ...................... ESC-h ... Move cursor left one character.
 ctrl-RightArrow  ESC-RightArrow  ESC-w ... Move cursor right one word.
 ctrl-LeftArrow   ESC-LeftArrow   ESC-b ... Move cursor left one word.
 HOME ........................... ESC-0 ... Move cursor to start of line.
 END ............................ ESC-$ ... Move cursor to end of line.
 BACKSPACE ................................ Delete char to left of cursor.
 DELETE ......................... ESC-x ... Delete char under cursor.
 ctrl-BACKSPACE   ESC-BACKSPACE ........... Delete word to left of cursor.
 ctrl-DELETE .... ESC-DELETE .... ESC-X ... Delete word under cursor.
 ctrl-U ......... ESC (MS-DOS only) ....... Delete entire line.
 UpArrow ........................ ESC-k ... Retrieve previous command line.
 DownArrow ...................... ESC-j ... Retrieve next command line.
 TAB ...................................... Complete filename & cycle.
 SHIFT-TAB ...................... ESC-TAB   Complete filename & reverse cycle.
 ctrl-L ................................... Complete filename, list all.
...skipping...
 ---------------------------------------------------------------------------

                          LINE EDITING

        These keys can be used to edit text being entered
        on the "command line" at the bottom of the screen.

 RightArrow ..................... ESC-l ... Move cursor right one character.
 LeftArrow ...................... ESC-h ... Move cursor left one character.
 ctrl-RightArrow  ESC-RightArrow  ESC-w ... Move cursor right one word.
 ctrl-LeftArrow   ESC-LeftArrow   ESC-b ... Move cursor left one word.
 HOME ........................... ESC-0 ... Move cursor to start of line.
 END ............................ ESC-$ ... Move cursor to end of line.
 BACKSPACE ................................ Delete char to left of cursor.
 DELETE ......................... ESC-x ... Delete char under cursor.
 ctrl-BACKSPACE   ESC-BACKSPACE ........... Delete word to left of cursor.
 ctrl-DELETE .... ESC-DELETE .... ESC-X ... Delete word under cursor.
 ctrl-U ......... ESC (MS-DOS only) ....... Delete entire line.
 UpArrow ........................ ESC-k ... Retrieve previous command line.
 DownArrow ...................... ESC-j ... Retrieve next command line.
 TAB ...................................... Complete filename & cycle.
 SHIFT-TAB ...................... ESC-TAB   Complete filename & reverse cycle.
 ctrl-L ................................... Complete filename, list all.
HELP -- END -- Press g to see it again, or q when done...skipping...
commit 6a03b624a2f1d31e600c6b0cde0d93802b15e5e7 (HEAD -> main)
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:22:21 2021 -0300

    modificação

commit 7a657ebcd6b329f78892b96abfa86195ffda117a (origin/main)
Author: Gabriel Hay <gabrielhayashida@live.com>
Date:   Thu Sep 9 21:17:24 2021 -0300

    adicionado pagina roupas

commit 651a1b93f3ab1da18f439b365afcdb0314d03d32
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 21:11:04 2021 -0300

    adição de pag inicial

commit 2fbd1ec862b59ab6d37aab9e3c2b19162abf87a5
Author: luis henrique <l.henrick@live.com>
Date:   Thu Sep 9 20:47:33 2021 -0300

    novo

Aluno@ESN914D1233543 MINGW64 ~/Desktop/atividade_presencialUC7 (main)
$ git push remote origin
error: src refspec origin does not match any
error: failed to push some refs to 'remote'

Aluno@ESN914D1233543 MINGW64 ~/Desktop/atividade_presencialUC7 (main)
$ git push origin main
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 6 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 289 bytes | 289.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/Henricknen/trabalho_em_equipe.git
   7a657eb..6a03b62  main -> main

Aluno@ESN914D1233543 MINGW64 ~/Desktop/atividade_presencialUC7 (main)
$ git pull origin main
remote: Enumerating objects: 9, done.
remote: Counting objects: 100% (8/8), done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 5 (delta 0), reused 5 (delta 0), pack-reused 0
Unpacking objects: 100% (5/5), 675 bytes | 19.00 KiB/s, done.
From https://github.com/Henricknen/trabalho_em_equipe
 * branch            main       -> FETCH_HEAD
   6a03b62..3cecb4f  main       -> origin/main
Updating 6a03b62..3cecb4f
Fast-forward
 roupas.txt | 3 +++
 1 file changed, 3 insertions(+)

Aluno@ESN914D1233543 MINGW64 ~/Desktop/atividade_presencialUC7 (main)
$

 ------------------------------------------------------------------------------------
  
  Colaborador_2:Gabriel Hayashida
  
  Aluno@ESN914D1233546 MINGW64 /f/Gabriel Hayashida/Atividades/trabalho em equipe git hub/trabalho_em_equipe (main)
$ git pull origin main
From https://github.com/Henricknen/trabalho_em_equipe
 * branch            main       -> FETCH_HEAD
Already up to date.

Aluno@ESN914D1233546 MINGW64 /f/Gabriel Hayashida/Atividades/trabalho em equipe git hub/trabalho_em_equipe (main)
$ git status
On branch main
Your branch is ahead of 'origin/main' by 2 commits.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean

Aluno@ESN914D1233546 MINGW64 /f/Gabriel Hayashida/Atividades/trabalho em equipe git hub/trabalho_em_equipe (main)
$ git push origin main
Enumerating objects: 9, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 6 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 695 bytes | 139.00 KiB/s, done.
Total 5 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/Henricknen/trabalho_em_equipe.git
   6a03b62..3cecb4f  main -> main

Aluno@ESN914D1233546 MINGW64 /f/Gabriel Hayashida/Atividades/trabalho em equipe git hub/trabalho_em_equipe (main)
$ d
