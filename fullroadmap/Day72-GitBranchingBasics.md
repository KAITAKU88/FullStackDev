# Git Branching và Merging căn bản (Đã đóng cọc lần 1)

## **Tổng quan về Phân nhánh (Branching) và Hợp nhất (Merging) trong Git**

Phân nhánh trong Git là một khái niệm quan trọng cho phép kho lưu trữ (repository) của bạn có thể chứa nhiều phiên bản "**thực tế song song**" khác nhau của các tệp (files) cùng một lúc. Bạn đã thực sự (một cách nào đó) sử dụng các nhánh kể từ khi thực hiện commit đầu tiên của mình, mặc dù có thể bạn không biết điều đó! Khi bạn thiết lập Git và chạy `git config --global init.defaultBranch main`, bạn đang đặt tên cho nhánh mặc định (default branch) của các kho lưu trữ của mình là **main**.

Giống như các cành cây (branches in a tree), tất cả các nhánh của một dự án đều phát triển từ một "thân cây" (trunk) chính (nhánh `main`) hoặc từ các nhánh khác.

Khi bạn thực hiện các **commit** trên một nhánh cụ thể, những thay đổi đó chỉ tồn tại trên nhánh đó, giữ cho tất cả các nhánh khác của bạn chính xác như chúng đã có khi bạn phân nhánh từ chúng. Điều này có nghĩa là bạn có thể giữ nhánh `main` của mình là nơi chỉ dành cho các tính năng đã hoàn thiện và hoạt động đúng đắn, đồng thời thêm mỗi tính năng vào dự án của mình bằng cách sử dụng các nhánh dành riêng, được gọi là **nhánh tính năng (feature branches)**.

**Mục đích chính của việc sử dụng nhánh bao gồm:**
>*   Cho phép bạn thực hiện các thay đổi mà không cần lo lắng về việc làm hỏng những gì bạn đã có.
>*   Duy trì nhánh `main` (hoặc `master`) luôn ổn định và chỉ chứa các tính năng đã được kiểm tra.
>*   Dễ dàng làm việc trên nhiều tính năng hoặc sửa lỗi cùng một lúc.
>*   Chia sẻ mã (code) với người khác mà bạn có thể không muốn **commit** vào nhánh chính.

---

## **1. Các thao tác phân nhánh cơ bản (Basic Branching)**

Để bắt đầu làm việc với nhánh, bạn cần biết các lệnh cơ bản sau:

*   **Tạo một nhánh mới (Creating a new branch):**  
    Bạn có thể tạo một nhánh mới bằng lệnh `git branch <tên_nhánh>`.
    *Ví dụ:* `git branch iss53` sẽ tạo một nhánh mới có tên `iss53`.
    ```
    //Tạo 1 repo tên là gitbranching-practice 
    //Sau đó clone về local
    // Chạy lệnh:
    git branch //Kết quả là *main cho thấy ta đang có 1 nhánh main 

    //Tạo nhánh mới là iss53 
    git branch iss53 
    git branch 
    //kết quả là 
    //iss53 
    //*main 

    //Để ý thấy trước main có dấu sao * (Đây là nhánh ta đang làm việc)
    ```

*   **Chuyển đổi sang một nhánh khác (Switching branches):**  
    Để chuyển sang một nhánh bạn vừa tạo hoặc một nhánh đã có, bạn sử dụng lệnh `git checkout <tên_nhánh>`.
    *Ví dụ:* `git checkout iss53` sẽ chuyển bạn sang nhánh `iss53`.
    ```
    git checkout iss53

    //Switched to branch 'iss53' (Đây là thông báo khi gõ lệnh )
    git branch

    //Kết quả
    //* iss53
    //main

    //Để ý lúc này dấu * nằm trước tên nhánh iss53, cho thấy ta đang làm việc trên nhánh này 
    ```  
    **Điều quan trọng cần nhớ:** Khi bạn chuyển đổi nhánh, Git sẽ đặt lại thư mục làm việc (working directory) của bạn trông giống như nó đã có lần cuối cùng bạn commit trên nhánh đó. Git sẽ tự động thêm, xóa và sửa đổi các tệp để đảm bảo bản sao làm việc của bạn giống như trạng thái của nhánh tại commit cuối cùng trên đó.

*   **Tạo và chuyển đổi sang nhánh mới trong một lệnh (Create and switch to a new branch in one command):**  
    Đây là một cách viết tắt rất tiện lợi. Bạn có thể tạo một nhánh mới và chuyển sang nó cùng một lúc bằng cách chạy lệnh `git checkout` với tùy chọn `-b`:
    `git checkout -b <tên_nhánh_mới>`
    *Ví dụ:* `git checkout -b iss53` sẽ tạo một nhánh `iss53` và ngay lập tức chuyển bạn sang nhánh đó.
    ```
    //Tạo nhánh iss53 đồng thời chuyển sang làm việc trên nhánh đó 
    git checkout -b iss53 
    ```

*   **Xem các nhánh hiện có (Viewing current branches):**  
    Bạn có thể xem tất cả các nhánh hiện tại của mình bằng cách sử dụng lệnh `git branch` mà không có đối số nào khác. Nhánh mà bạn đang ở sẽ được đánh dấu bằng dấu hoa thị (`*`).
    ```
    git branch 
    ```
*   **Nội dung được tạo ra trong nhánh nào thì chỉ hiển thị trong nhánh đó**  
>-  Ví dụ trong nhánh iss53 bạn tạo file iss53.html, vậy thì iss53.html chỉ xuất hiện trong nhánh này. Nếu giờ chuyển sang nhánh khác thì sẽ không thấy file iss53.html nữa.


**Ví dụ minh họa quy trình làm việc cơ bản với nhánh:**

>Hãy tưởng tượng bạn đang làm việc trên một dự án website và đã có một vài commit trên nhánh `main` (hoặc `master`).

1.  **Bắt đầu làm việc trên một tính năng mới (Start working on a new feature):**    
    Bạn quyết định sẽ làm việc trên vấn đề #53 (issue #53). Để tạo một nhánh mới và chuyển sang nó cùng một lúc, bạn chạy lệnh `git checkout -b`:  
    ```
    $ git checkout -b iss53
    //Switched to a new branch "iss53"
    ```
    Lệnh này tương đương với:
    ```
    $ git branch iss53
    $ git checkout iss53
    ```
    Bây giờ, bạn thực hiện một số công việc trên website và tạo các **commit**. Việc này sẽ di chuyển con trỏ nhánh `iss53` về phía trước, vì `HEAD` của bạn đang trỏ đến nó:
    ```
    $ git commit -a -m 'Create new footer [issue 53]'

    //Lênh git commit có tùy chọn -a tức là bao gồm cả git add .
    //Tuy nhiên nếu có file mới thì vẫn phải dùng git add . trước đó 
    ```

2.  **Xử lý một bản vá nóng (hotfix) khẩn cấp:**  
    Giờ đây, bạn nhận được một cuộc gọi rằng có một vấn đề khẩn cấp với trang web và bạn cần sửa nó ngay lập tức. Với Git, bạn không cần phải triển khai bản sửa lỗi cùng với các thay đổi của `iss53` mà bạn đã thực hiện, và bạn cũng không phải tốn nhiều công sức để hoàn nguyên (reverting) những thay đổi đó trước khi có thể áp dụng bản sửa lỗi. Tất cả những gì bạn phải làm là chuyển trở lại nhánh chính `main`.

    **Lưu ý quan trọng:** Nếu thư mục làm việc (working directory) hoặc khu vực dàn dựng (staging area) của bạn có những thay đổi chưa được commit mà xung đột với nhánh bạn đang checkout, Git sẽ không cho phép bạn chuyển nhánh. Tốt nhất là bạn nên có một trạng thái làm việc sạch (clean working state) khi chuyển nhánh. (*Có những cách để vượt qua điều này như `stashing` và `commit amending`, sẽ được đề cập trong các phần khác của tài liệu Git*).
    Giả sử bạn đã commit tất cả các thay đổi của mình, bạn có thể chuyển về nhánh `main`:
    ```
    $ git checkout main
    //Switched to branch 'main'
    //Your branch is up to date with 'origin/main'.
    ```
    Tại thời điểm này, thư mục làm việc dự án của bạn chính xác như trước khi bạn bắt đầu làm việc trên vấn đề #53, và bạn có thể tập trung vào bản vá nóng của mình.

    Tiếp theo, bạn cần thực hiện một bản vá nóng. Hãy tạo một nhánh `hotfix` để làm việc cho đến khi nó hoàn thành:
    ```
    //Tạo nhánh hotfix đồng thời chuyển sang nhánh đó 
    $ git checkout -b hotfix
    //kết quả thông báo:
    //Switched to a new branch 'hotfix'

    //Giả sử sau khi thực hiện sửa lỗi, bạn commit 
    $ git commit -a -m 'Fix broken email address'
    [hotfix 1fb7853] Fix broken email address
    1 file changed, 2 insertions(+)
    ```

---

## **2. Các thao tác hợp nhất cơ bản (Basic Merging)**

Sau khi bản vá nóng hoàn tất và được kiểm tra, bạn cần hợp nhất nó trở lại nhánh `main` để triển khai (deploy) vào môi trường sản xuất (production). Bạn thực hiện điều này với lệnh `git merge`:

1.  **Hợp nhất nhánh `hotfix` vào `master`:**  
    Bạn cần chắc chắn mình đang ở trên nhánh `main` trước khi hợp nhất `hotfix` vào nó:
    ```
    $ git checkout master
    $ git merge hotfix
    Updating f42c576..3a0874c
    Fast-forward
     index.html | 2 ++
     1 file changed, 2 insertions(+)
    ```
    Bạn sẽ thấy cụm từ "**fast-forward**" trong quá trình hợp nhất này.

    *   **Hợp nhất "Fast-forward" (Fast-forward merge):**  
        Bởi vì commit `C4` mà nhánh `hotfix` bạn đã hợp nhất vào **trực tiếp ở phía trước** của commit `C2` mà bạn đang ở, Git chỉ đơn giản là di chuyển con trỏ về phía trước. Nói cách khác, khi bạn cố gắng hợp nhất một commit với một commit có thể được đạt tới bằng cách theo dõi lịch sử của commit đầu tiên, Git đơn giản hóa mọi thứ bằng cách di chuyển con trỏ về phía trước vì **không có công việc phân kỳ** (divergent work) nào để hợp nhất lại với nhau — đây được gọi là "fast-forward".

    Bản sửa lỗi của bạn hiện đã nằm trong ảnh chụp nhanh (snapshot) của commit mà nhánh `main` trỏ đến, và bạn có thể triển khai bản sửa lỗi.

2.  **Xóa nhánh sau khi hợp nhất (Deleting branches after merge):**  
    Sau khi bản sửa lỗi quan trọng được triển khai, bạn có thể xóa nhánh `hotfix` vì bạn không cần nó nữa — nhánh `main` đã trỏ đến cùng một vị trí. Bạn có thể xóa nó bằng tùy chọn `-d` của `git branch`:
    ```
    $ git branch -d hotfix
    Deleted branch hotfix (3a0874c).
    ```
    Nếu bạn muốn xóa một nhánh mà chưa được hợp nhất vào nhánh hiện tại, bạn có thể sử dụng `-D` thay vì `-d` (`git branch -D`).

3.  **Tiếp tục công việc trên nhánh `iss53`:**  
    Bây giờ bạn có thể chuyển về nhánh đang làm dở trên vấn đề #53 và tiếp tục công việc của mình:
    ```
    $ git checkout iss53
    Switched to branch "iss53"
    //Thực hiện chỉnh sửa nội dụng sau đó:
    $ git commit -a -m 'Finish the new footer [issue 53]'
    [iss53 ad82d7a] Finish the new footer [issue 53]
    1 file changed, 1 insertion(+)
    ```
    **Lưu ý:** Công việc bạn đã làm trong nhánh `hotfix` không được chứa trong các tệp ở nhánh `iss53` của bạn. Nếu bạn cần đưa nó vào, bạn có thể hợp nhất nhánh `main` vào nhánh `iss53` bằng cách chạy `git merge main`, hoặc bạn có thể đợi để tích hợp những thay đổi đó cho đến khi bạn quyết định đưa nhánh `iss53` trở lại `main` sau này.

4.  **Hợp nhất nhánh `iss53` vào `main`:**  
    Giả sử bạn đã quyết định rằng công việc của vấn đề #53 đã hoàn thành và sẵn sàng được hợp nhất vào nhánh `main` của bạn. Bạn sẽ hợp nhất nhánh `iss53` của mình vnh `main`, giống như bạn đã hợp nhất nhánh `hotfix` trước đó. Tất cả những gì bạn phải làm là chuyển đến nhánh mà bạn muốn hợp nhất vào, sau đó chạy lệnh `git merge`:
    ```
    $ git checkout main
    Switched to branch main'
    $ git merge iss53
    Merge made by the 'recursive' strategy.
    index.html | 1 +
    1 file changed, 1 insertion(+)
    ```
    Lần này, kết quả trông hơi khác so với hợp nhất `hotfix` mà bạn đã làm trước đó.

    *   **Hợp nhất ba chiều (Three-way merge) và commit hợp nhất (Merge commit):**
        Trong trường hợp này, lịch sử phát triển của bạn đã **phân kỳ** (diverged) từ một điểm cũ hơn. Vì commit trên nhánh bạn đang đứng không phải là tổ tiên trực tiếp (direct ancestor) của nhánh bạn đang hợp nhất vào, Git phải thực hiện một số công việc. Trong trường hợp này, Git thực hiện một **hợp nhất ba chiều đơn giản** (simple three-way merge), sử dụng hai ảnh chụp nhanh được trỏ bởi các đầu nhánh và tổ tiên chung của cả hai.
        Thay vì chỉ di chuyển con trỏ nhánh về phía trước, Git tạo một ảnh chụp nhanh mới là kết quả của hợp nhất ba chiều này và tự động tạo một commit mới trỏ đến nó. Đây được gọi là một **commit hợp nhất** (merge commit), và nó đặc biệt ở chỗ nó có nhiều hơn một cha mẹ (parent).

5.  **Xóa nhánh `iss53` sau khi hợp nhất:**  
    Bây giờ công việc của bạn đã được hợp nhất, bạn không còn cần nhánh `iss53` nữa. Bạn có thể đóng vấn đề trong hệ thống theo dõi vấn đề (issue-tracking system) của mình và xóa nhánh:
    ```
    $ git branch -d iss53
    ```

---

## **3. Căn bản về Xung đột khi hợp nhất (Basic Merge Conflicts)**

Đôi khi, quá trình hợp nhất không diễn ra suôn sẻ. Nếu bạn thay đổi cùng một phần của cùng một tệp theo những cách khác nhau trong hai nhánh bạn đang hợp nhất, Git sẽ không thể hợp nhất chúng một cách sạch sẽ. Khi điều này xảy ra, bạn sẽ gặp một **xung đột hợp nhất** (merge conflict).

*   **Nhận diện xung đột:**  
    Nếu sửa lỗi cho vấn đề #53 của bạn sửa đổi cùng một phần của một tệp với nhánh `hotfix`, bạn sẽ nhận được một xung đột hợp nhất trông giống như thế này:
    ```
    $ git merge iss53
    Auto-merging index.html
    CONFLICT (content): Merge conflict in index.html
    Automatic merge failed; fix conflicts and then commit the result.
    ```
    Git chưa tự động tạo một commit hợp nhất mới. Nó đã tạm dừng quá trình trong khi bạn giải quyết xung đột. Nếu bạn muốn xem tệp nào chưa được hợp nhất tại bất kỳ thời điểm nào sau xung đột hợp nhất, bạn có thể chạy `git status`:
    ```
    $ git status
    On branch master
    You have unmerged paths.
      (fix conflicts and run "git commit")
    Unmerged paths:
      (use "git add <file>..." to mark resolution)
        both modified:   index.html

    no changes added to commit (use "git add" and/or "git commit -a")
    ```
    Bất cứ thứ gì có xung đột hợp nhất và chưa được giải quyết đều được liệt kê là "**unmerged**".

*   **Giải quyết xung đột thủ công (Manual conflict resolution):**  
    Git thêm các dấu hiệu giải quyết xung đột chuẩn vào các tệp có xung đột, vì vậy bạn có thể mở chúng theo cách thủ công và giải quyết các xung đột đó. Tệp của bạn sẽ chứa một phần trông giống như thế này:
    ```
    <<<<<<< HEAD:index.html
    <div id="footer">contact : email.support@github.com</div>
    =======
    <div id="footer"> please contact us at support@github.com </div>
    >>>>>>> iss53:index.html
    ```
    Điều này có nghĩa là phiên bản trong `HEAD` (nhánh `master` của bạn, vì đó là nhánh bạn đã checkout khi chạy lệnh hợp nhất) là phần trên của khối đó (mọi thứ phía trên `=======`), trong khi phiên bản trong nhánh `iss53` của bạn trông giống như mọi thứ ở phần dưới.
    Để giải quyết xung đột, bạn phải chọn một bên hoặc bên kia, hoặc tự hợp nhất nội dung. Ví dụ, bạn có thể giải quyết xung đột này bằng cách thay thế toàn bộ khối bằng dòng sau:
    ```
    <div id="footer"> please contact us at email.support@github.com </div>
    ```
    Sau khi bạn đã giải quyết từng phần xung đột trong mỗi tệp bị xung đột, hãy chạy `git add` trên mỗi tệp để đánh dấu nó là đã được giải quyết. Việc dàn dựng (staging) tệp sẽ đánh dấu nó là đã được giải quyết trong Git.

*   **Giải quyết xung đột bằng công cụ đồ họa (Graphical merge tools):**  
    Nếu bạn muốn sử dụng một công cụ đồ họa để giải quyết các vấn đề này, bạn có thể chạy `git mergetool`, lệnh này sẽ khởi động một công cụ hợp nhất hình ảnh (visual merge tool) thích hợp và hướng dẫn bạn qua các xung đột:
    ```
    $ git mergetool
    This message is displayed because 'merge.tool' is not configured.
    See 'git mergetool --tool-help' or 'git help config' for more details.
    'git mergetool' will now attempt to use one of the following tools:
    opendiff kdiff3 tkdiff xxdiff meld tortoisemerge gvimdiff diffuse ecmerge p4merge araxis bc3 codecompare vimdiff emerge
    Merging: index.html
    Normal merge conflict for 'index.html':
      {local}: modified file
      {remote}: modified file
    Hit return to start merge resolution tool (opendiff):
    ```
    Nếu bạn muốn sử dụng một công cụ hợp nhất khác ngoài công cụ mặc định (Git chọn `opendiff` trong trường hợp này vì lệnh được chạy trên macOS), bạn có thể thấy tất cả các công cụ được hỗ trợ được liệt kê ở trên cùng sau "one of the following tools." Chỉ cần gõ tên công cụ bạn muốn sử dụng.
    Sau khi bạn thoát công cụ hợp nhất, Git sẽ hỏi bạn liệu việc hợp nhất có thành công hay không. Nếu bạn xác nhận rằng nó thành công, nó sẽ dàn dựng (stage) tệp để đánh dấu nó là đã được giải quyết cho bạn.

*   **Kết thúc hợp nhất (Finalizing the merge):**  
    Bạn có thể chạy `git status` một lần nữa để xác minh rằng tất cả các xung đột đã được giải quyết:
    ```
    $ git status
    On branch master
    All conflicts fixed but you are still merging.
      (use "git commit" to conclude merge)
    Changes to be committed:
        modified:   index.html
    ```
    Nếu bạn hài lòng với điều đó và xác minh rằng mọi thứ có xung đột đã được dàn dựng, bạn có thể gõ `git commit` để hoàn tất commit hợp nhất. Tin nhắn commit mặc định sẽ trông giống như thế này:
    ```
    Merge branch 'iss53'
    Conflicts:
        index.html
    #
    # It looks like you may be committing a merge.
    # If this is not correct, please remove the file
    # .git/MERGE_HEAD
    # and try again.
    # Please enter the commit message for your changes. Lines starting
    # with '#' will be ignored, and an empty message aborts the commit.
    # On branch master
    # All conflicts fixed but you are still merging.
    #
    # Changes to be committed:
    #   modified:   index.html
    #
    ```
    Nếu bạn nghĩ rằng việc sửa đổi tin nhắn commit này sẽ hữu ích cho những người xem lại quá trình hợp nhất này trong tương lai, bạn có thể thêm chi tiết về cách bạn đã giải quyết hợp nhất và giải thích lý do bạn đã thực hiện các thay đổi nếu chúng không rõ ràng.

---

## **4. Chia sẻ mã (Sharing Code) với `git push -u`**

Một trường hợp sử dụng tuyệt vời khác cho các nhánh là để chia sẻ mã với những người khác mà bạn có thể không muốn commit vào nhánh chính (hoặc nhánh tính năng) của mình ngay lập tức. Ví dụ: nếu bạn có một lỗi trong một tính năng mới mà bạn đang làm việc mà không thể tìm ra, và nó khiến mã của bạn bị lỗi, bạn không muốn commit mã bị lỗi đó và lưu vào "hồ sơ vĩnh viễn" của dự án. Thay vào đó, bạn có thể tạo một nhánh tạm thời mới, chuyển sang đó và commit mã của mình vào nhánh mới này. Nếu sau đó bạn đẩy (push) nhánh tạm thời mới này lên GitHub, bạn có thể chia sẻ nó với những người khác có thể giúp giải quyết vấn đề của bạn.

Khi bạn đẩy các thay đổi từ kho lưu trữ cục bộ (local repository) của mình lên một kho lưu trữ từ xa (remote repository), bạn thường sử dụng lệnh `git push`. Một tùy chọn hữu ích đi kèm là `-u`:

*   **Lệnh `git push -u <remote> <branch name>`:**  
    Lệnh này tải nội dung từ kho lưu trữ cục bộ lên kho lưu trữ từ xa. Nó thường được sử dụng để tải lên các sửa đổi trong kho lưu trữ cục bộ với các thành viên nhóm từ xa.

    *   **`-u` (upstream):** Tùy chọn `-u` (hoặc `--set-upstream`) tạo một **tham chiếu theo dõi** (tracking reference) cho mỗi nhánh mà bạn đẩy thành công lên kho lưu trữ từ xa. Nhánh cục bộ (local branch) bạn đẩy sẽ tự động được liên kết với nhánh từ xa (remote branch). Điều này cho phép bạn sử dụng các lệnh như `git pull` mà không cần thêm bất kỳ đối số nào.
    *   **`<remote>`:** Tùy chọn này chỉ định tên của kho lưu trữ từ xa mà các thay đổi cần được đẩy tới. Nếu bạn nhân bản (clone) một kho lưu trữ, tên của kho lưu trữ từ xa được lưu dưới tên `origin` trên hệ thống cục bộ của bạn. Thay vào đó, bạn cũng có thể cung cấp URL (Uniform Resource Locator) của kho lưu trữ.
    *   **`<branch name>`:** Tùy chọn này chỉ định nhánh của kho lưu trữ từ xa mà các thay đổi cần được đẩy tới.

    *Ví dụ về cách sử dụng:*
    ```
    git push -u git@github.com:username/example.git master
    ```
    Lệnh trên đẩy các thay đổi từ nhánh cục bộ của bạn lên nhánh `master` của kho lưu trữ `example`.
    Vì cờ `-u` được sử dụng, nhánh cục bộ của bạn tự động được liên kết với nhánh `master`. Do đó, bất cứ khi nào bạn cần kéo (pull) các thay đổi từ nhánh `master`, bạn có thể sử dụng lệnh `git pull` mà không cần bất kỳ đối số nào.







## Tài liệu phải đọc khi ĐÓNG CỌC LẦN 2:
>1. https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors
>2. https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#_basic_merging
>3. https://www.educative.io/edpresso/what-is-the-git-push--u-remote-branch-name-command
>4. https://learngitbranching.js.org/

> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc bài mới mỗi ngày!** ⭐  

**[<== Bài Trước  ](link)          |[  Trang Chủ  ](./README.md)|           [  Bài Sau ==>](link)**
